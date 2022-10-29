import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact = new Contact();
  submitted = false;
  message="your message is successsfully sent ";

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }


  saveContact(): void {
    console.log(this.contact)

   this.contactService.create(this.contact)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.message;

          
        },
        error => {
          console.log(error);
        });
  }

  

  

}
