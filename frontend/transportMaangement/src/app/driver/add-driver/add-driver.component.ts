import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/_services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  driver:Driver = new Driver();
  submitted=false;

  constructor(private driverService: DriverService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDriver(): void {
    console.log(this.driver)

   this.driverService.create(this.driver)
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
  refresh(): void {
    this.router.navigate(['/driver']);

  }

}
