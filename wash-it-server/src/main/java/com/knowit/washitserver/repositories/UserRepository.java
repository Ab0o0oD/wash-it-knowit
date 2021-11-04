package com.knowit.washitserver.repositories;

import com.knowit.washitserver.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {
}
