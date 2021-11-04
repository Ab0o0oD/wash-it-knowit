package com.knowit.washitserver.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "washing_machine")
@NoArgsConstructor
public class WashingMachine {
    public WashingMachine(boolean available, LocalDate fromDate, LocalDate toDate) {
        this.available = available;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "machine_generator")
    @SequenceGenerator(name = "machine_generator", sequenceName = "machine_seq")
    public int id;

    @Column
    public boolean available;

    @Column
    public LocalDate fromDate;

    @Column
    public LocalDate toDate;

}
