import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from 'src/app/_services/driver.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  username?: string;

 

  drivers: any [] =[]

  name= '';

  currentIndex = -1;

  constructor(private tokenStorageService: TokenStorageService, private router: Router,  private driverService: DriverService,  private route: ActivatedRoute) { }
 
  ngOnInit(): void {

    this.retrieveDriver();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');

      this.username = user.username;
    }
  }

  retrieveDriver(): void {
    this.driverService.getAll()
      .subscribe(
        data => {
          this.drivers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.driverService.findByName(this.name)
      .subscribe(
        data => {
          this.drivers = data;
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

}
