package com.example.backend.controller;

import com.example.backend.dto.LoginResponse;
import com.example.backend.model.User;
import com.example.backend.security.JwtUtil;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> registerRequest) {
        String name = registerRequest.get("name");
        String phoneNumber = registerRequest.get("phoneNumber");
        String password = registerRequest.get("password");
        String role = registerRequest.get("role");

        // Check if user already exists
        if (userService.findByPhoneNumber(phoneNumber) != null) {
            return ResponseEntity.status(400).body("User already exists with this phone number");
        }

        // Create and save new user (in production, hash the password!)
        User user = new User();
        user.setUsername(name);
        user.setPhoneNumber(phoneNumber);
        user.setPassword(password); // TODO: Hash password in production
        user.setRole(role);

        userService.createUser(user);

        return ResponseEntity.status(201).body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginRequest) {
        String phoneNumber = loginRequest.get("phoneNumber");
        String password = loginRequest.get("password");
        String role = loginRequest.get("role");
        User user = userService.findByPhoneNumber(phoneNumber);

        if (user != null && user.getPassword().equals(password) && user.getRole().equals(role)) {
            // Generate JWT token
            String token = jwtService.generateToken(user.getPhoneNumber());
            LoginResponse response = new LoginResponse(token, user);
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@RequestHeader("Authorization") String authHeader) {
        try {
            // 1. Extract token
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(401).body("Missing or invalid Authorization header");
            }
            String token = authHeader.substring(7);

            // 2. Validate token
            if (!jwtService.verifyToken(token)) {
                return ResponseEntity.status(401).body("Invalid or expired token");
            }

            // 3. Extract user info from token (e.g., username)
            String username = jwtService.extractUsername(token);
            User user = userService.findByPhoneNumber(username);

            if (user == null) {
                return ResponseEntity.status(404).body("User not found");
            }

            // 4. Return user details
            return ResponseEntity.ok(user);

        } catch (Exception e) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
    }
}