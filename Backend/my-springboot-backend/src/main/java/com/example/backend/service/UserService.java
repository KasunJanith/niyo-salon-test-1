package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;


import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    

    @Autowired
    private UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public org.springframework.http.ResponseEntity<?> registerUser(User user) {
        // Implement your registration logic here
        // For now, just return a generic response
        return org.springframework.http.ResponseEntity.ok("User registered successfully");
    }
    public org.springframework.http.ResponseEntity<?> loginUser(User user) {
        // Implement your login logic here
        // For now, just return a generic response
        return org.springframework.http.ResponseEntity.ok("User logged in successfully");
    }

    public int getUserCount() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserCount'");
    }

    public User findByPhoneNumber(String phoneNumber) {
        return userRepository.findByPhoneNumber(phoneNumber);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

}