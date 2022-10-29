package com.saraya.TransportManagement.controller;

import com.saraya.TransportManagement.exception.ResourceNotFoundException;
import com.saraya.TransportManagement.models.Trip;
import com.saraya.TransportManagement.repository.TripRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class TripController {
    private final TripRepository repo;

    public TripController(TripRepository repo) {
        this.repo = repo;
    }


    @GetMapping("/trips")
    public List<Trip> getAllTrips(){
        return repo.findAll();
    }

    @GetMapping({"/trip/{tripId}"})
    public ResponseEntity<Trip> getTripById(@PathVariable(value = "tripId") Long tripId) {
        Trip trip = repo.findById(tripId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Trip with id = " + tripId));

        return new ResponseEntity<>(trip, HttpStatus.OK);
    }



    @PostMapping("/trip")
    public ResponseEntity<Trip> createTrip(@RequestBody Trip tripRequest) {
       tripRequest.setStatus(false);
        Trip trip = repo.save(tripRequest);

        return new ResponseEntity<>(trip, HttpStatus.CREATED);
    }

    @PutMapping("/trip/{tripId}")
    public ResponseEntity<Trip> updateTrip(@PathVariable("tripId") long tripId ,
                                               @RequestBody Trip tripRequest) {
        Trip trip = repo.findById(tripId)
                .orElseThrow(() -> new ResourceNotFoundException("Id " + tripId + " not found"));
        trip.setFromm(tripRequest.getFromm());
        trip.setToo(tripRequest.getToo());
        trip.setStatus(trip.isStatus());
       // trip.setTruck(tripRequest.getTruck());


        return new ResponseEntity<>(repo.save(trip), HttpStatus.OK);
    }

    @DeleteMapping("/trip/{tripId}")
    public ResponseEntity<HttpStatus> deleteTrip(@PathVariable("tripId") long tripId) {
        repo.deleteById(tripId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
