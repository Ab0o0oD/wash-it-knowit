package com.knowit.washitserver.service;

import com.knowit.washitserver.domain.Reservation;
import com.knowit.washitserver.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private WashingProgramService washingProgramService;

    @Autowired
    private WashingMachineService washingMachineService;

    public List<Reservation> getAllReservations() {
        ArrayList<Reservation> reservations = new ArrayList<>();
        reservationRepository.findAll().forEach( reservations::add );
        return reservations;
    }


    public void saveReservation(int userId, int machineId, int programId) {
        washingMachineService.updateWashingMachineStatusById( machineId );
        Reservation reservation = new Reservation( userId, machineId, programId );
        reservationRepository.save( reservation );
    }

}

