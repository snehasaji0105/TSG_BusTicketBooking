package com.example.BusTicketBooking.service;

import com.example.BusTicketBooking.dto.AuthResponse;
import com.example.BusTicketBooking.exception.ResourceNotFoundException;
import com.example.BusTicketBooking.model.Bus;
import com.example.BusTicketBooking.model.TicketBooking;
import com.example.BusTicketBooking.repository.BusRepository;
import com.example.BusTicketBooking.repository.TicketBookingRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TicketBookingService {
    final Logger logger = LoggerFactory.getLogger(TicketBookingService.class);
    @Autowired
    private TicketBookingRepository ticketBookingRepository;
    @Autowired
    private BusRepository busRepository;


    public ResponseEntity<TicketBooking> getTicket(Integer id) {
        logger.info("get ticket with given id");
        return new ResponseEntity<TicketBooking>(this.ticketBookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ticket", "id","id")), HttpStatus.FOUND);}

    public ResponseEntity<AuthResponse> addTicket(TicketBooking ticketBooking) {
        try {
            logger.info("added ticket");
            ticketBookingRepository.save(ticketBooking);
            return ResponseEntity.ok(new AuthResponse(" added successfully", true));
        } catch (Exception e) {
            throw new ResourceNotFoundException("ticket", e.getMessage(), "creating new ticket error");
        }


    }



    public ResponseEntity<AuthResponse> deleteTicket(Long id) {
        TicketBooking ticketBooking = ticketBookingRepository.findById(Integer.valueOf(Math.toIntExact(id))).orElseThrow(() -> new ResourceNotFoundException("BusTicketBooking", "id", "not exist"));
        logger.info("deleted course");
        ticketBookingRepository.delete(ticketBooking);
        return ResponseEntity.ok(new AuthResponse(String.format("%s is deleted", id), true));
    }

    public ResponseEntity<String> addTicketToBus(Integer ticketId,Integer busId){
        TicketBooking ticketBooking=ticketBookingRepository.findById(ticketId).orElseThrow();
        Bus bus=busRepository.findById(busId).orElseThrow();
        ticketBooking.setBus(bus);
        ticketBookingRepository.save(ticketBooking);
        return ResponseEntity.ok("Added Successfully");
    }


}



