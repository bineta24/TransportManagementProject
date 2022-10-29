package com.saraya.TransportManagement.controller;

import com.saraya.TransportManagement.models.User;
import com.saraya.TransportManagement.repository.RoleRepository;
import com.saraya.TransportManagement.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

    private final UserRepository repo;

    private final RoleRepository role;

    public TestController(UserRepository repo, RoleRepository role) {
        this.repo = repo;
        this.role = role;
    }
    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User ";
    }

    @GetMapping("/man")
    @PreAuthorize("hasRole('MANAGER')")
    public String managerAccess() {
        return "manager Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }


    @GetMapping("/admin/users")

    public List<User> getAll(){
        return repo.findAll();
    }

    @GetMapping("/users/{id}")

    public Optional<User> getUser(@PathVariable(value = "id") Long id){
        return repo.findById(id);
    }


    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> userData = repo.findById(id);

        if (userData.isPresent()) {
            User _user = userData.get();
            _user.setFirstname(user.getFirstname());
            _user.setLastname(user.getLastname());
            _user.setUsername(user.getUsername());
            _user.setEmail(user.getEmail());

            return new ResponseEntity<>(repo.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        try {
            repo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/userFirstname")
    public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String firstname) {

            List<User> user = new ArrayList<User>();

            if (firstname == null)
                repo.findAll().forEach(user::add);
            else
                repo.findByFirstnameContaining(firstname).forEach(user::add);

            if (user.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(user, HttpStatus.OK);

    }





}