import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/_services/branch.service';
import { User } from '../../models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {
  currentBranch: Branch = {
    name: '',
    country: '',
    city: '',
    id: null,
    manager: {

    }
  };



  constructor(private branchService: BranchService,private route: ActivatedRoute, private router:Router) { }

 

  ngOnInit(): void {
    this.getOneBranch(this.route.snapshot.params.id);
  }


  updateBranch(){
    this.branchService.update(this.currentBranch.id, this.currentBranch)
      .subscribe(
        response => {
          
          console.log(response);
          this.refresh();
          
        },
        error => {
          console.log(error);
        });
  }


  refresh(): void {
    window.location.reload();
    this.router.navigate(['/branch']);
    
}

getOneBranch(id: number): void {
  this.branchService.getOneBranch(id)
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
