package com.saraya.TransportManagement.models;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String fromm;
    private String too;
    private boolean status;

    @OneToOne
    @JoinColumn(name = "truck_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Truck truck;




}
