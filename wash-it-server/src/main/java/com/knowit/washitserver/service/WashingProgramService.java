package com.knowit.washitserver.service;

import com.knowit.washitserver.domain.WashingProgram;
import com.knowit.washitserver.repositories.WashingProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WashingProgramService {
    @Autowired
    private WashingProgramRepository washingProgramRepository;

    public WashingProgram getProgram(int programId) {
        return washingProgramRepository.findById( programId ).orElseThrow();
    }

    public List<WashingProgram> getAllPrograms() {
        ArrayList<WashingProgram> washingProgramList = new ArrayList<>();
        washingProgramRepository.findAll().forEach( washingProgramList::add );
        return washingProgramList;
    }
}
