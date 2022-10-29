import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../../models/branch';
import { BranchService } from '../../_services/branch.service';
import { TokenStorageService } from '../../_services/token-storage.service';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor( private branchService: BranchService,private tokenStorageService: TokenStorageService, private route: ActivatedRoute, private router: Router) { }

  branch : Branch = new Branch

  

  submitted = false;

  branchs: any []= [] ;

  currentBranch: Branch = {
    name: '',
    country: '',
    city: '',
    manager: {
  
    }
    
  }

  name ='';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
  currentIndex = -1;

  ngOnInit(): void {
    this.retrieveBranch();
    

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     

      this.username = user.username;
    }
  }


 

  retrieveBranch(): void {
    this.branchService.getAll()
      .subscribe(
        data => {
          this.branchs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  searchName(): void {
    this.branchService.findByName(this.name)
      .subscribe(
        data => {
          this.branchs = data;
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
 

  deleteBranch(id: number) {
    this.branchService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
         
        },
        error => {
          console.log(error);
        });
  }

  setActiveBranch(branch: Branch, index: number): void {
    this.currentBranch = branch;
    this.currentIndex = index;
  }
        
      }
