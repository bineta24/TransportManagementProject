package com.saraya.TransportManagement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Truck {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String model;

    private  String no;

    private String insurance;

    private Long capacity;

    @Column(name = "status")
    private boolean status;

    @ManyToOne
    //@JsonIgnore
    private Branch branch;



}
