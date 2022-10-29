import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

  constructor(private userService: UserService,private route: ActivatedRoute, private router:Router) { }

  currentUser: User = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    id: null
  };


  ngOnInit(): void {
    
    this.getOneUser(this.route.snapshot.params.id);
  }

  getOneUser(id: number): void {
    this.userService.getOneUser(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateUser(){
    this.userService.update(this.currentUser.id, this.currentUser)
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
   
    this.router.navigate(['/man']);
  
}



}
