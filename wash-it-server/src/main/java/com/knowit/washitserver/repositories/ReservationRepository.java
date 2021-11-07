package com.knowit.washitserver.repositories;

import com.knowit.washitserver.domain.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {

    @Query("SELECT r FROM Reservation r WHERE r.userId = :userId")
    List<Reservation> fineAllreservationsByUserId(@Param("userId") int userId);
}
