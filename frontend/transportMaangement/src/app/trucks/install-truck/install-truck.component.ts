import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Truck } from '../../models/truck';
import { BranchService } from '../../_services/branch.service';
import { TruckService } from '../../_services/truck.service';

@Component({
  selector: 'app-install-truck',
  templateUrl: './install-truck.component.html',
  styleUrls: ['./install-truck.component.css']
})
export class InstallTruckComponent implements OnInit {

  truck:Truck = new Truck();
 
  branch: any [] =[]
  submitted = false;
  constructor( private truckService: TruckService, private branchService: BranchService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveBranch();
  }

  saveTruck(): void {
    console.log(this.truck)

   this.truckService.create(this.truck)
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

  retrieveBranch(): void {
    this.branchService.getAll()
      .subscribe(
        data => {
          this.branch = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refresh():void{
    this.router.navigate(['/truck']);
  }

  
}
