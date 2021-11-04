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
        LocalDate from =  LocalDate.of(2022,1, 1);
        LocalDate to =  LocalDate.of(2022,1, 2);
        WashingMachine wm1 =  new WashingMachine(true, from,to );
        WashingMachine wm2 =  new WashingMachine(true, from,to );
        WashingMachine wm3 =  new WashingMachine(true, from,to );
        WashingMachine wm4 =  new WashingMachine(true, from,to );
       washingMachineRepository.save(wm1);
       washingMachineRepository.save(wm2);
       washingMachineRepository.save(wm3);
       washingMachineRepository.save(wm4);



    }



}
