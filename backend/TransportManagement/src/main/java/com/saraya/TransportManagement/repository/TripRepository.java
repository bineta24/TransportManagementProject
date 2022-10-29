package com.saraya.TransportManagement.repository;

import com.saraya.TransportManagement.models.Trip;
import com.saraya.TransportManagement.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {


}
