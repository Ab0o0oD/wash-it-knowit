package com.knowit.washitserver.service;

import com.knowit.washitserver.domain.WashingMachine;
import com.knowit.washitserver.repositories.WashingMachineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WashingMachineService {
    @Autowired
    WashingMachineRepository washingMachineRepository;

    public void saveWashingMachine (WashingMachine wm){
        washingMachineRepository.save( wm );
    }
    public List<WashingMachine> getAllWashingMachines() {
        List<WashingMachine> washingMachines = new ArrayList<WashingMachine>();
        washingMachineRepository.findAll().forEach( washingMachines::add );
        return washingMachines;
    }

    public WashingMachine getWashingMachineById(int id) {
        return null;
    }
}
