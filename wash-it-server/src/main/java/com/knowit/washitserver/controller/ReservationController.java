package com.knowit.washitserver.controller;

import com.knowit.washitserver.domain.Reservation;
import com.knowit.washitserver.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/")
    private List<Reservation> getAllReservation() {
        return reservationService.getAllReservations();
    }

    @PostMapping("/{userId}/{machineId}/{programId}")
    private void saveReservation(@PathVariable int userId, @PathVariable int machineId, @PathVariable int programId) {
        reservationService.saveReservation( userId, machineId, programId );

    }
}
