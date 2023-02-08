package com.example.BusTicketBooking.controller;

import com.example.BusTicketBooking.dto.AuthResponse;
import com.example.BusTicketBooking.model.Bus;
import com.example.BusTicketBooking.service.BusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/bus")
@CrossOrigin
public class BusController {
    final Logger logger = LoggerFactory.getLogger(BusController.class);
    @Autowired
    private BusService busService;


   @PreAuthorize("hasRole('ROLE_ADMIN')")
   @PostMapping("add-bus")
    public ResponseEntity<AuthResponse> addBus(@RequestBody Bus bus) {
        return busService.addBus(bus);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("get-bus")
    public ResponseEntity<List<Bus>> getBus() {
        return busService.getBus();
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("update-bus/{id}")
    public ResponseEntity<AuthResponse> updateBus(@PathVariable Integer id,@RequestBody Bus updatedBus) {
        return busService.updateBus(id,updatedBus);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("delete-bus/{id}")
    public ResponseEntity<AuthResponse> deleteBus(@PathVariable Integer id) {
        return busService.deleteBus(id);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("add-route")
    public ResponseEntity<String> addRoute(@RequestParam("routeId") Integer routeId,@RequestParam("busId") Integer busId){
        return busService.addBusToRoute(routeId,busId);
    }
}
