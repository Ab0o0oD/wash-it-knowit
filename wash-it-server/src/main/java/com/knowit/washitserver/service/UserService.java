package com.knowit.washitserver.service;

import com.knowit.washitserver.domain.User;
import com.knowit.washitserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(int id) {
        return userRepository.findById( id ).orElseThrow();
    }
}
