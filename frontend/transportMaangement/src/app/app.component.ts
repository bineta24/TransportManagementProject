import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BoardManagerComponent } from './managers/managerList/board-manager.component';
import { Branch } from './models/branch';
import { Truck } from './models/truck';
import { User } from './models/user';
import { BranchService } from './_services/branch.service';
import { TokenStorageService } from './_services/token-storage.service';
import { TruckService } from './_services/truck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TransportManagement';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username?: string;
  id?: 0;


  currentUser: User = {
    branch:{
      name:'',
      id:0
    }
  };


  /*currentBranch: Branch = {
    name: '',
    country: '',
    city: '',
    manager: {
  
    }
  }*/

  currentTruck: Truck = {
    no: '',
   
  
    branch: {
      id :0
  
    }
  }




  constructor(private tokenStorageService: TokenStorageService, private router: Router,private branchService: BranchService, private truckService: TruckService) { }

  ngOnInit(): void {

    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');

      this.username = user.username;
      this.id = user.id;
      
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['/home']);
  }

  profile(){
    if(this.currentUser.username=="Baye"){
      console.log();
    }
  }

  getTruckByBranchId(id:number):void{
    this.truckService.getTruckByBranchId(this.currentTruck.branch?.id)
    .subscribe(
      data => {
        this.currentTruck = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }


 /* getBranchByUserId(id:number):void{
    this.branchService.getBranchByuserId(this.currentBranch.manager?.id)
    .subscribe(
      data => {
        this.currentBranch = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }*/
}


