package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import com.example.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private UserService userService;
    @Autowired
    private AppointmentService appointmentService;

    // Add new staff member
    @PostMapping("/add-staff")
    @PreAuthorize("isAuthenticated()") // Optional: restrict to ADMIN role
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> payload) {

        if (payload.get("phoneNumber") == null || payload.get("password") == null || payload.get("name") == null || payload.get("role") == null) {
            return ResponseEntity.badRequest().body("Missing required fields");
        }
        if (userService.findByPhoneNumber(payload.get("phoneNumber")) != null) {
            return ResponseEntity.status(409).body("Phone Number already in use");
        }
        User user = new User();

        user.setPhoneNumber(payload.get("phoneNumber"));
        user.setRole(payload.get("role"));
        // Hash the password here if you have a PasswordEncoder bean
        user.setPassword(payload.get("password"));
        user.setUsername(payload.get("name"));
        User createdUser = userService.save(user);
        return ResponseEntity.status(201).body(createdUser);
    }

    // Add new user (customer or admin)
    @PostMapping("/add-user")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        if (user.getRole() == null)
            user.setRole("customer");
        User created = userService.createUser(user);
        return ResponseEntity.status(201).body(created);
    }

    // Export report (CSV of users)
    @GetMapping("/export-users")
    public ResponseEntity<byte[]> exportUsers() {
        List<User> users = userService.getAllUsers();
        String csv = "id,username,phoneNumber,role\n" +
                users.stream()
                        .map(u -> u.getId() + "," + u.getUsername() + "," + u.getPhoneNumber() + "," + u.getRole())
                        .collect(Collectors.joining("\n"));
        byte[] csvBytes = csv.getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=users_report.csv")
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csvBytes);
    }

    // Export report (CSV of appointments)
    @GetMapping("/export-appointments")
    public ResponseEntity<byte[]> exportAppointments() {
        var appointments = appointmentService.getAllAppointments();
        String csv = "id,title,description,appointmentDate,userId\n" +
                appointments.stream()
                        .map(a -> a.getId() + "," + a.getTitle() + "," + a.getDescription() + ","
                                + a.getAppointmentDate() + "," + a.getUserId())
                        .collect(Collectors.joining("\n"));
        byte[] csvBytes = csv.getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=appointments_report.csv")
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csvBytes);
    }
}
