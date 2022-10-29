package com.saraya.TransportManagement.repository;

import com.saraya.TransportManagement.models.Branch;
import com.saraya.TransportManagement.models.ERole;
import com.saraya.TransportManagement.models.Role;
import com.saraya.TransportManagement.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);


    List<User> findByFirstnameContaining(String firstname);


    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}