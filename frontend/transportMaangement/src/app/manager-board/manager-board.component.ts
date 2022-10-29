import { Component, OnInit } from '@angular/core';
import { Branch } from '../models/branch';
import { BranchService } from '../_services/branch.service';

@Component({
  selector: 'app-manager-board',
  templateUrl: './manager-board.component.html',
  styleUrls: ['./manager-board.component.css']
})
export class ManagerBoardComponent implements OnInit {

  constructor(private branchService: BranchService) { }

  currentBranch: Branch = {
    name: '',
    country: '',
    city: '',
    manager: {
  
    }
  }
  ngOnInit(): void {
    
  }


  getBranchByUserId(id:number):void{
    this.branchService.getBranchByuserId(this.currentBranch.manager?.id)
    .subscribe(
      data => {
        this.currentBranch = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }
}
