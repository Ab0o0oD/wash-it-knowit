package com.knowit.washitserver.repositories;

import com.knowit.washitserver.domain.WashingProgram;
import org.springframework.data.repository.CrudRepository;

public interface WashingProgramRepository extends CrudRepository<WashingProgram,Integer> {
}
