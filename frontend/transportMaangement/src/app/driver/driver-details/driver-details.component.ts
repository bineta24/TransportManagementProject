import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/_services/driver.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  currentDriver: Driver ={

    name: '',
    phone: '',
    email: '',
    address: ''
    
  }

  private roles: string[] = [];
isLoggedIn = false;
showAdminBoard = false;
showManagerBoard = false;


  constructor(private driverService: DriverService,private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

    ngOnInit(): void {
      this.getOneDriver(this.route.snapshot.params.id);
    
      this.isLoggedIn = !!this.tokenStorageService.getToken();
    
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
    
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
    
     
    }
    
    }
    
    getOneDriver(id: number): void {
      this.driverService.getOneDriver(id)
        .subscribe(
          data => {
            this.currentDriver = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    
    
   
    
    updateDriver(): void {
    this.driverService.update(this.currentDriver.id, this.currentDriver)
      .subscribe(
        response => {
          console.log(response);
          this.refresh();
          
        },
        error => {
          console.log(error);
        });
    }
    
    deleteDriver(): void {
    this.driverService.delete(this.currentDriver.id)
      .subscribe(
        response => {
          console.log(response);
          //window.location.reload();
          this.refresh();

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
    this.router.navigate(['/driver']);
    }
    
    
    

}











