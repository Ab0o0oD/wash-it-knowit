package com.knowit.washitserver.controller;

import com.knowit.washitserver.domain.WashingProgram;
import com.knowit.washitserver.service.WashingProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/program")
public class WashingProgramController {
    @Autowired
    private WashingProgramService washingProgramService;

    @GetMapping("/")
    private List<WashingProgram> getAllPrograms() {
        return washingProgramService.getAllPrograms();
    }

    @GetMapping("/{id}")
    private WashingProgram getMachine(@PathVariable int id) {
        return washingProgramService.getProgram( id );
    }
}
