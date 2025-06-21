package com.example.backend.dto;

public class LoginResponse {
    private String token;
    private Object user; // Replace Object with your actual User DTO/class

    public LoginResponse(String token, Object user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public Object getUser() {
        return user;
    }
}