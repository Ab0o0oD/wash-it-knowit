package com.knowit.washitserver.domain;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table
@NoArgsConstructor
public class WashingProgram {
    public WashingProgram(String type, int temperature, int duration) {
        this.type = type;
        this.temperature = temperature;
        this.duration = duration;
    }

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "program_generator")
    @SequenceGenerator(name="program_generator", sequenceName = "program_seq")
    private int id;

    @Column
    private String type;

    @Column
    private int temperature;

    @Column
    private int duration;

}
