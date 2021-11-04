package com.knowit.washitserver.service;

import com.knowit.washitserver.domain.WashingMachine;
import com.knowit.washitserver.repositories.WashingMachineRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WashingMachineService {
    @Autowired
    WashingMachineRepository washingMachineRepository;

    Logger logger = LoggerFactory.getLogger( "Machine_Service" );

    public void saveWashingMachine(WashingMachine wm) {
        washingMachineRepository.save( wm );
    }

    public void updateWashingMachineStatusById(int id) {
        WashingMachine washingMachine = washingMachineRepository.findById( id ).orElseThrow();
        washingMachine.setAvailable( false );
        washingMachineRepository.save(washingMachine );
    }

    public List<WashingMachine> getAllWashingMachines() {
        List<WashingMachine> washingMachines = new ArrayList<>();
        washingMachineRepository.findAll().forEach( washingMachines::add );
        return washingMachines;
    }

    public WashingMachine getWashingMachineById(int id) {
        logger.info( "getting machine number: " + id );
        return washingMachineRepository.findById( id ).orElse( null );
    }
}
