package com.knowit.washitserver.utils;

import com.knowit.washitserver.domain.WashingMachine;
import com.knowit.washitserver.repositories.UserRepository;
import com.knowit.washitserver.repositories.WashingMachineRepository;
import com.knowit.washitserver.repositories.WashingProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class WashingMachineRunner implements CommandLineRunner {
    @Autowired
    WashingMachineRepository washingMachineRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    WashingProgramRepository washingProgramRepository;

    @Override
    public void run(String... args) throws Exception {
        LocalDate from = LocalDate.of( 2022, 1, 1 );
        LocalDate to = LocalDate.of( 2022, 1, 2 );

        for (int i = 0; i < 12; i++) {
            washingMachineRepository.save( new WashingMachine( true, from, to ) );
        }


    }


}
