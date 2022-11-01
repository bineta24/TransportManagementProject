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

public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;
    private String phone;
    private String email;
    private String address;
    @OneToOne
   @JsonIgnore
    private Truck truck;




}
