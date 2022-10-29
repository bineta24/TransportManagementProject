import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { TokenStorageService } from '../../_services/token-storage.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {
  managers: any [] =[]
  manager?: User[];


  currentUser: User = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password:'',
    
    
  };

  firstname ='';
  currentIndex = -1;
  

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor( private userService: UserService, private router: Router , private route: ActivatedRoute, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.retrieveManagers();
  
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     

      this.username = user.username;
    }
  }

  retrieveManagers() {
    this.userService.getAllManger()
      .subscribe(
        data => {
          //this.managers =data;
          //console.log(data);
          data.filter((item:any)=> {
            if(item.roles[0].name=="ROLE_MANAGER"){
              this.managers.push(item);
            }
          })
          console.log("managers" ,this.managers)
          console.log(this.managers)
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
          //this.router.navigate(['/man']);
        },
        error => {
          console.log(error);
        });
  }

  searchFirstName(): void {
    this.userService.findByFirstname(this.firstname)
      .subscribe(
        data => {
          this.managers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


 /* setActiveManager(manager: User, index: number): void {
    this.currentUser = manager;
    this.currentIndex = index;
  }*/


logout(): void {
  this.tokenStorageService.signOut();
  window.location.reload();
  this.router.navigate(['/home']);
}

}



