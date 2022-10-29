package com.saraya.TransportManagement.controller;

import com.saraya.TransportManagement.exception.ResourceNotFoundException;
import com.saraya.TransportManagement.models.Contact;
import com.saraya.TransportManagement.models.Contact;
import com.saraya.TransportManagement.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import javax.mail.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ContactController {
    /*@RequestMapping(value = "/sendmail")

    public String sendEmail() throws AddressException, MessagingException, IOException {
        sendmail();
        return "Email sent successfully";
    }*/

    private final ContactRepository repo;

    public ContactController(ContactRepository repo) {
        this.repo = repo;
    }


    @PostMapping("/contact")

    public ResponseEntity<Contact> createContact(@RequestBody Contact contactRequest)  {

        Contact contact = repo.save(contactRequest);
        sendSimpleEmail(contact);

        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }


    @GetMapping("/contacts")
    public List<Contact> getAllContacts(){
        return repo.findAll();
    }

    @GetMapping({"/contact/{contactId}"})
    public ResponseEntity<Contact> getContactById(@PathVariable(value = "contactId") Long contactId) {
        Contact contact = repo.findById(contactId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Contact with id = " + contactId));

        return new ResponseEntity<>(contact, HttpStatus.OK);
    }




    /*@EventListener(ApplicationReadyEvent.class)
    public void triggerMail() throws MessagingException {
        Contact contact = new Contact();
        sendSimpleEmail(contact);

    }*/


    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleEmail(Contact contact) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(contact.getEmail());
        message.setTo("binetad048@gmail.com");

        message.setText(contact.getMessage()+ ","+ contact.getPhone()+ ","+ contact.getName());

        mailSender.send(message);
        System.out.println("Mail Send...");

    }
}
