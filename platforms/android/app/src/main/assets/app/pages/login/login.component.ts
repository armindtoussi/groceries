import { Component } from "@angular/core";

//models
import { User } from "../../shared/user/user";

//services 
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: './pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {

  user: User;

  isLoggingIn: boolean = true;

  constructor(private _userService: UserService) { 
    this.user = new User();
    this.user.email = "toussi69@gmail.com";
    this.user.password = "Speed1";
  }

  submit() {
    if(this.isLoggingIn) {
      this.login();
    } else { 
      this.signUp();
    }
  }

  login() {
    //todo 
  }

  signUp() {
    this._userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfullly created.");
          this.toggleDisplay();
        },
        () => alert ("Unfortunately we were unable to create your account.")
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}