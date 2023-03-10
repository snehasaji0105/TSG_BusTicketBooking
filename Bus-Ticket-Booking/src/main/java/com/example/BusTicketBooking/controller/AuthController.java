package com.example.BusTicketBooking.controller;


import com.example.BusTicketBooking.dto.AuthRequest;
import com.example.BusTicketBooking.dto.AuthResponse;
import com.example.BusTicketBooking.dto.JwtResponse;
import com.example.BusTicketBooking.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    final Logger logger = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private AuthService authService;

    @PostMapping("register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody AuthRequest request) {

        return authService.registerUser(request);
    }
    @PostMapping("login")
    public ResponseEntity<JwtResponse> loginUser(@RequestBody AuthRequest request){
        return authService.loginUser(request);
    }
}
