package com.example.BusTicketBooking.repository;

import com.example.BusTicketBooking.model.Bus;

import com.example.BusTicketBooking.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface BusRepository extends JpaRepository<Bus,Integer> {
    List<Bus> findByBusId(Long busId);


}


