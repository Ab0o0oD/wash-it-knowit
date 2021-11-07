package com.knowit.washitserver.controller;

import com.knowit.washitserver.domain.User;
import com.knowit.washitserver.service.UserService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/{firstName}/{lastName}/{mobileNumber}")
    public void saveUser(@PathVariable String firstName, @PathVariable String lastName, @PathVariable String mobileNumber) {
        User newUser = new User( firstName, lastName, mobileNumber );
        userService.saveUser( newUser );
    }

    @PostMapping("/{firstName}/{lastName}")
    public User getUserByFirstNameAndLastName(@PathVariable String firstName, @PathVariable String lastName) {
        try {
            return userService.getUserByFirstNameAndLastName( firstName, lastName );
        } catch (NotFoundException e) {
            e.printStackTrace();
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "User not found"
            );
        }
    }
}
