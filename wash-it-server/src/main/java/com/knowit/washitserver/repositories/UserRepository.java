package com.knowit.washitserver.repositories;

import com.knowit.washitserver.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.firstName = :firstName and u.lastName= :lastName")
    User getUserByFirstNameAndLastName(@Param("firstName") String firstName, @Param("lastName") String lastName);
}
