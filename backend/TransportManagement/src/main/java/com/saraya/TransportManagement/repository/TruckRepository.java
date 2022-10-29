package com.saraya.TransportManagement.repository;

import com.saraya.TransportManagement.models.Truck;
import com.saraya.TransportManagement.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TruckRepository extends JpaRepository<Truck, Long> {

    List<Truck> findByStatus(boolean status);

    List<Truck> findByBranchBranchId(Long branchId);


    List<Truck> findByNoContaining(String no);
}
