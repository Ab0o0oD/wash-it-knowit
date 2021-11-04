package com.knowit.washitserver.repositories;

import com.knowit.washitserver.domain.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
}
