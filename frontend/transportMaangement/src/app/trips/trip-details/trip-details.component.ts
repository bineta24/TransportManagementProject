import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TripService } from 'src/app/_services/trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  currentTrip: Trip = {
    fromm: '',
    too: '',
    status: false,
   
  };
  

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
 

  constructor(private tripService: TripService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOneTrip(this.route.snapshot.params.id);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');

   
  }
  
  }

  getOneTrip(id: number): void {
    this.tripService.getOneTrip(id)
      .subscribe(
        data => {
          this.currentTrip = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateStatus(status: boolean): void {
    const data = {
      fromm: this.currentTrip.fromm,
      too: this.currentTrip.too,
      
      status: status,
    
      
    };
    this.tripService.update(this.currentTrip.id, data)
    .subscribe(
      response => {
        this.currentTrip.status = status;
        console.log(response);
        this.refresh();

        
      },
      error => {
        console.log(error);
      });
}

updateTrip(): void {
  this.tripService.update(this.currentTrip.id, this.currentTrip)
    .subscribe(
      response => {
        console.log(response);
        this.refresh();
        
      },
      error => {
        console.log(error);
      });
}

deleteTrip(): void {
  this.tripService.delete(this.currentTrip.id)
    .subscribe(
      response => {
        console.log(response);
       // window.location.reload();
       this;this.refresh();
      },
      error => {
        console.log(error);
      });
}

logout(): void {
  this.tokenStorageService.signOut();
  window.location.reload();
  this.router.navigate(['/home']);
}
refresh():void{
  this.router.navigate(['/trip']);
}


}
