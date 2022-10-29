package com.saraya.TransportManagement.repository;

import com.saraya.TransportManagement.models.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface BranchRepository extends JpaRepository<Branch, Long> {

    Branch findByManagerId(Long userId);
    @Transactional
    void deleteByManager(Long user_id);


    List<Branch> findByNameContaining(String name);

}
