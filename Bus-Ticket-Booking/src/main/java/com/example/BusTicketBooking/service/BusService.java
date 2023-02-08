package com.example.BusTicketBooking.service;

import com.example.BusTicketBooking.dto.AuthResponse;
import com.example.BusTicketBooking.exception.ResourceNotFoundException;
import com.example.BusTicketBooking.model.Bus;

import com.example.BusTicketBooking.model.BusRoute;
import com.example.BusTicketBooking.repository.BusRepository;
import com.example.BusTicketBooking.repository.BusRouteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BusService {
    final Logger logger = LoggerFactory.getLogger(BusService.class);

    @Autowired
    private BusRepository busRepository;
    @Autowired
    private BusRouteRepository busRouteRepository;
    public ResponseEntity<AuthResponse> addBus(Bus bus) {
        String methodName ="addBus";
        try {
            logger.info("Entering Method "+methodName);

            busRepository.save(bus);
            logger.info("Bus added successfully :: "+bus.getBusId());
            return ResponseEntity.ok(new AuthResponse("added successfully",true));
        } catch (Exception e) {
            logger.error("Failed adding Bus "+bus.getBusId());
            e.printStackTrace();
            throw new ResourceNotFoundException("bus",e.getMessage(), "creating new bus error");
        }
    }
    public ResponseEntity<List<Bus>> getBus() {
        logger.info("Get Bus");
        return ResponseEntity.ok(busRepository.findAll());
    }

    public ResponseEntity<AuthResponse> updateBus(Integer id, Bus updatedBus) {
        Bus oldBus =busRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Bus", id.toString(), "not exist"));
        oldBus.setBusNumber(updatedBus.getBusNumber());

        oldBus.setBusName(updatedBus.getBusName());
        oldBus.setTotalSeats(updatedBus.getTotalSeats());
        oldBus.setRouteDestination(updatedBus.getRouteDestination());
        oldBus.setRouteSource(updatedBus.getRouteSource());

        busRepository.save(oldBus);
        logger.info("updated Bus");
        return ResponseEntity.ok(new AuthResponse(String.format("%s is updated", id), true));
    }
    public ResponseEntity<AuthResponse> deleteBus(Integer id) {
        Bus bus = busRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Bus", id.toString(), "not exist"));
        logger.info("deleted bus");
        busRepository.delete(bus);
        return ResponseEntity.ok(new AuthResponse(String.format("%s is deleted", id), true));
    }
    public ResponseEntity<String> addBusToRoute(Integer routeId,Integer busId){
     BusRoute busRoute= busRouteRepository.findById(routeId).orElseThrow();
     Bus bus=busRepository.findById(busId).orElseThrow();
     bus.setRoute(busRoute);
     busRepository.save(bus);
     return ResponseEntity.ok("Added Successfully");
    }

}
