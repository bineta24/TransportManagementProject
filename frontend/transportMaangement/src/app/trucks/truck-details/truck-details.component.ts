import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from 'src/app/models/truck';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TruckService } from 'src/app/_services/truck.service';

@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.css']
})
export class TruckDetailsComponent implements OnInit {

  currentTruck: Truck = {
    model: '',
    no: '',
    insurance: '',
    capacity: 0,
    status: false,
   
  };

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
 

  constructor(private truckService: TruckService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOneTruck(this.route.snapshot.params.id);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');

   
  }
  
  }

  getOneTruck(id: number): void {
    this.truckService.getOneTruck(id)
      .subscribe(
        data => {
          this.currentTruck = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateStatus(status: boolean): void {
    const data = {
      no: this.currentTruck.no,
      model: this.currentTruck.model,
      insurance: this.currentTruck.insurance,
      capacity: this.currentTruck.capacity,
      status: status,
    
      
    };
    this.truckService.update(this.currentTruck.id, data)
    .subscribe(
      response => {
        this.currentTruck.status = status;
        console.log(response);
        this.refresh();

        
      },
      error => {
        console.log(error);
      });
}

updateTruck(): void {
  this.truckService.update(this.currentTruck.id, this.currentTruck)
    .subscribe(
      response => {
        console.log(response);
        this.refresh();
        
      },
      error => {
        console.log(error);
      });
}

deleteTruck(): void {
  this.truckService.delete(this.currentTruck.id)
    .subscribe(
      response => {
        console.log(response);
        window.location.reload();
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
  this.router.navigate(['/truck']);
}


}

