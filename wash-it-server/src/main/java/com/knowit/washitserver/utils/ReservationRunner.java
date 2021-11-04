package com.knowit.washitserver.utils;

import com.knowit.washitserver.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ReservationRunner implements CommandLineRunner {
    @Autowired
    ReservationService reservationService;

    @Override
    public void run(String... args) {
        // reservationService.saveReservation( 1, 1,2 );
    }


}