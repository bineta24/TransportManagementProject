import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/_services/trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
trip:Trip = new Trip();
 

  submitted = false;
  constructor( private tripService: TripService, private router: Router) { }

  ngOnInit(): void {
    
  }

  saveTrip(): void {
    console.log(this.trip)

   this.tripService.create(this.trip)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.refresh();
        },
      
        error => {
          console.log(error);
        });
  }

  

  refresh():void{
    this.router.navigate(['/trip']);
  }

  

 

}
