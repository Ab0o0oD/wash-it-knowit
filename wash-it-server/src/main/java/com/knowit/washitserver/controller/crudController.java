package com.knowit.washitserver.controller;

import com.knowit.washitserver.domain.WashingMachine;
import com.knowit.washitserver.service.WashingMachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class crudController {
    @Autowired
    private WashingMachineService wms;

    @GetMapping("/machine")
    private List<WashingMachine> getAllMachines() {
        return wms.getAllWashingMachines();
    }

    @PostMapping("/machine")
    private void saveWashingMachine(@RequestBody WashingMachine wm){
        wms.saveWashingMachine( wm );
    }
}
