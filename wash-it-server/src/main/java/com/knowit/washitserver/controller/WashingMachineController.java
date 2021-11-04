package com.knowit.washitserver.controller;

import com.knowit.washitserver.domain.WashingMachine;
import com.knowit.washitserver.service.WashingMachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/machine")
public class WashingMachineController {
    @Autowired
    private WashingMachineService wms;


    @PostMapping("/save")
    private void saveWashingMachine(@RequestBody WashingMachine wm) {
        wms.saveWashingMachine( wm );
    }

    @GetMapping("/")
    private List<WashingMachine> getAllMachines() {
        return wms.getAllWashingMachines();
    }

    @GetMapping("/{id}")
    private WashingMachine getMachine(@PathVariable int id) {
        return wms.getWashingMachineById( id );
    }
}
