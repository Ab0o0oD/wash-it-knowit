package com.knowit.washitserver.utils;

import com.knowit.washitserver.domain.WashingProgram;
import com.knowit.washitserver.repositories.WashingProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class WashingProgramRunner implements CommandLineRunner {
    @Autowired
    WashingProgramRepository washingProgramRepository;

    @Override
    public void run(String... args) throws Exception {
        washingProgramRepository.save( new WashingProgram( "Kokvask", 60, 90 ) );
        washingProgramRepository.save( new WashingProgram( "Tøyvask", 40, 60 ) );
        washingProgramRepository.save( new WashingProgram( "Håndvask", 30, 20 ) );

    }


}
