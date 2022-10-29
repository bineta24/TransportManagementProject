import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  form: any = {
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';



 
  

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }
  managers: any [] =[]

  ngOnInit(): void {
  }


  onSubmit(): void {
    const { firstname, lastname, username, email, password } = this.form;

    this.authService.register(firstname, lastname, username, email, password).subscribe(
      data => {
        console.log(data);
        if (this.isSuccessful = true){
          this.refresh();
        }
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  refresh(): void {
    window.location.reload();
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


}
