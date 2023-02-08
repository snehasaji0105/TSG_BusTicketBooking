package com.example.BusTicketBooking.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "busRoute",uniqueConstraints = {
        @UniqueConstraint(columnNames = {"journeyDate"})})
@Data
@NoArgsConstructor
@AllArgsConstructor


public class BusRoute {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
   private Integer routeId;

    private String journeyDate;
    private Integer bookedSeats;

}
