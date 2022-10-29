package com.saraya.TransportManagement.controller;

import com.saraya.TransportManagement.exception.ResourceNotFoundException;
import com.saraya.TransportManagement.models.Driver;
import com.saraya.TransportManagement.models.Truck;
import com.saraya.TransportManagement.repository.DriverRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class DriverController {

    private final DriverRepository repo;

    public DriverController(DriverRepository repo) {
        this.repo = repo;
    }


    @GetMapping("/drivers")
    public List<Driver> getAllDrivers(){
        return repo.findAll();
    }

    @GetMapping({"/driver/{driverId}"})
    public ResponseEntity<Driver> getDriverById(@PathVariable(value = "driverId") Long driverId) {
        Driver driver = repo.findById(driverId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Driver with id = " + driverId));

        return new ResponseEntity<>(driver, HttpStatus.OK);
    }

    @GetMapping("/driverName")
    public ResponseEntity<List<Driver>> getAllDriver(@RequestParam(required = false) String name) {
        List<Driver> driver = new ArrayList<Driver>();

        if (name == null)
            repo.findAll().forEach(driver::add);
        else
            repo.findByNameContaining(name).forEach(driver::add);

        if (driver.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(driver, HttpStatus.OK);
    }



    @PostMapping("/driver")
    public ResponseEntity<Driver> createDriver(@RequestBody Driver driverRequest) {

        Driver driver = repo.save(driverRequest);

        return new ResponseEntity<>(driver, HttpStatus.CREATED);
    }

    @PutMapping("/driver/{driverId}")
    public ResponseEntity<Driver> updateDriver(@PathVariable("driverId") long driverId ,
                                             @RequestBody Driver driverRequest) {
        Driver driver = repo.findById(driverId)
                .orElseThrow(() -> new ResourceNotFoundException("Id " + driverId + " not found"));
        driver.setName(driverRequest.getName());
        driver.setPhone(driverRequest.getPhone());
        driver.setEmail(driverRequest.getEmail());
        driver.setAddress(driverRequest.getAddress());

        return new ResponseEntity<>(repo.save(driver), HttpStatus.OK);
    }

    @DeleteMapping("/driver/{driverId}")
    public ResponseEntity<HttpStatus> deleteDriver(@PathVariable("driverId") long driverId) {
        repo.deleteById(driverId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
