package com.knowit.washitserver.domain;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "washing_machine")
@NoArgsConstructor
public class WashingMachine {
    public WashingMachine(boolean available, LocalDate from, LocalDate to) {
        this.available = available;
        From = from;
        this.to = to;
    }

    @Id
        @NotNull
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "machine_generator")
        @SequenceGenerator(name="machine_generator", sequenceName = "machine_seq")
    private int id;

    @Column
    private boolean available;

    @Column(name = "fromDate")
    private LocalDate From;

    @Column(name = "toDate")
    private LocalDate to;

}
