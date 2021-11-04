package com.knowit.washitserver.domain;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table
@NoArgsConstructor
public class Reservation {
    public Reservation(int userId, int machineId, int programId) {
        this.userId = userId;
        this.programId = programId;
        this.machineId = machineId;
    }

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservation_generator")
    @SequenceGenerator(name = "reservation_generator", sequenceName = "reservation_seq")
    public int id;

    @Column
    public int userId;

    @Column
    public int machineId;

    @Column
    public int programId;

}
