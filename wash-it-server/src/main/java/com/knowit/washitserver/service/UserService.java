package com.knowit.washitserver.service;

import com.knowit.washitserver.domain.User;
import com.knowit.washitserver.repositories.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserById(int id) {
        return userRepository.findById( id ).orElseThrow();
    }

    public User getUserByFirstNameAndLastName(String firstName, String lastName) throws NotFoundException {
        User user = userRepository.getUserByFirstNameAndLastName( firstName, lastName );
        if (user != null) {
            return user;
        } else {
            throw new NotFoundException( "user not foundd" );
        }
    }

    public void saveUser(User user) {
        userRepository.save( user );
    }
}
