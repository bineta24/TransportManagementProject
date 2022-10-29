import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../../models/branch';
import { User } from '../../models/user';
import { BranchService } from '../../_services/branch.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  branch:Branch = new Branch();
  
manager: any [] =[]




  submitted = false;
  //currentUser = null;

  constructor(private branchService: BranchService, private userService: UserService,  private route: ActivatedRoute,
    private router: Router) { }
   

  ngOnInit(): void {
    this.retrieveManagers();
    
  }
  /*getOneUser(id: string):void {
    this.userService.getOneUser(id)
    .subscribe(
      data => {
        this.currentUser = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }*/


  retrieveManagers() {
    this.userService.getAllManger()
      .subscribe(
        data => {
          //this.managers =data;
          //console.log(data);
          data.filter((item:any)=> {
            if(item.roles[0].name=="ROLE_MANAGER"){
              this.manager.push(item);
            }
          })
          console.log("manager" ,this.manager)
          console.log(this.manager)
        },
        error => {
          console.log(error);
        });
  }


   saveBranch(): void {
    console.log(this.branch)

   this.branchService.create(this.branch)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/branch']);
        },
        error => {
          console.log(error);
        });
  }


}

