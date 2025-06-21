package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.service.UserService;
import com.example.backend.service.AppointmentService;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private UserService userService;

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/data")
    public Object getDashboardData() {
        // Example usage of userService and appointmentService to avoid unused field warning
        int userCount = userService.getUserCount(); // Replace with actual method if different
        int appointmentCount = appointmentService.getAppointmentCount(); // Replace with actual method if different

        // Logic to retrieve dashboard data based on user roles
        // This is a placeholder for actual implementation
        java.util.Map<String, Integer> dashboardData = new java.util.HashMap<>();
        dashboardData.put("userCount", userCount);
        dashboardData.put("appointmentCount", appointmentCount);
        return dashboardData; // Replace with actual data retrieval logic
    }
}