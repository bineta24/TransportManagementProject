package com.saraya.TransportManagement.repository;

import com.saraya.TransportManagement.models.Driver;
import com.saraya.TransportManagement.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DriverRepository extends JpaRepository <Driver, Long>{
    List<Driver> findByNameContaining(String name);

}
