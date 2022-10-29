package com.saraya.TransportManagement.repository;

import com.saraya.TransportManagement.models.ERole;
import com.saraya.TransportManagement.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
