package com.knowit.washitserver.repositories;

import com.knowit.washitserver.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
