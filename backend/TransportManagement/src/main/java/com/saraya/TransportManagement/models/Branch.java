package com.saraya.TransportManagement.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity

@Table(name = "branch")
@AllArgsConstructor
@Data
@NoArgsConstructor
@Getter
@Setter

@ToString

public class Branch  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long branchId;

    @Column(name = "name")
    private String name;

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private String city;

  @OneToOne(mappedBy = "branch")
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User manager;

    @OneToMany
    @JoinColumn(name = "truck_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Truck> truck;




    public Branch(String name, String country, String city, User manager, List<Truck>truck) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.manager = manager;
        this.truck =  truck;
    }
}
