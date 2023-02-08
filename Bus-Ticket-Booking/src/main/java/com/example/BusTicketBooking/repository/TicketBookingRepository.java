package com.example.BusTicketBooking.repository;


import com.example.BusTicketBooking.model.TicketBooking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketBookingRepository extends JpaRepository<TicketBooking,Integer> {
//    List<TicketBooking> findBybus_id(Integer bus_id);

}