package com.example.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime appointmentDate;

    @Column(nullable = false)
    private Long userId;

    public Appointment() {
    }

    public Appointment(String title, String description, LocalDateTime appointmentDate, Long userId) {
        this.title = title;
        this.description = description;
        this.appointmentDate = appointmentDate;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDateTime appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    // class definition and fields

    public java.time.LocalDate getDate() {
        return this.getDate();
    }

    public void setDate(java.time.LocalDate date) {
        // Assuming you want to set the date part of appointmentDate
        this.appointmentDate = LocalDateTime.of(date, this.appointmentDate.toLocalTime());
    }

    public java.time.LocalTime getTime() {
        return this.appointmentDate.toLocalTime();
    }

    public void setTime(java.time.LocalTime time) {
        // Assuming you want to set the time part of appointmentDate
        this.appointmentDate = LocalDateTime.of(this.appointmentDate.toLocalDate(), time);
    }

}