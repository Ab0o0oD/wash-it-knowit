package com.knowit.washitserver.domain;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Reservation {
    @ManyToOne
    private User user;


    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    LocalDate startTime;

}
