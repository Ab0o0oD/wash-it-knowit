package com.knowit.washitserver.utils;

import com.knowit.washitserver.domain.User;
import com.knowit.washitserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserRunner implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        userRepository.save( new User( "Abdulrazak", "Kanjo", "91999980" ) );
        userRepository.save( new User( "Olaf", "Anders", "123456789" ) );
        userRepository.save( new User( "Synne", "Darko", "123456789" ) );
    }


}
