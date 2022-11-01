import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from 'src/app/models/truck';
import { User } from 'src/app/models/user';
import { TruckService } from 'src/app/_services/truck.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {

  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username?: string;

  currentUser: User = {
    branch:{
      name:''
    }
  };

 

  trucks: any [] =[]

 
  no= '';

  currentIndex = -1;

  constructor(private tokenStorageService: TokenStorageService, private router: Router,  private truckService: TruckService,  private route: ActivatedRoute) { }
 
  ngOnInit(): void {

    this.retrievetruck();

    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log("first")
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');

      this.username = user.username;
    }
  }

  retrievetruck(): void {
    this.truckService.getAll()
      .subscribe(
        data => {
          this.trucks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 

  searchNo(): void {
    this.truckService.findByNo(this.no)
      .subscribe(
        data => {
          this.trucks = data;
          console.log(data);
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


  /*getTruckByBranchId(id:number):void{
    this.truckService.getTruckByBranchId(this.trucks.branch?.id)
    .subscribe(
      data => {
        this.currentTruck = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }*/

}
