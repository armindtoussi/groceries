import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router }       from "@angular/router";
import { Page }         from "ui/page";
import { Color }        from "color";
import { View }         from "ui/core/view";
import { setHintColor } from "../../utils/hint-util";
import { TextField }    from "ui/text-field";

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
export class LoginComponent implements OnInit {

  user: User;

  isLoggingIn: boolean = true;
  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;


  constructor(private _userService: UserService,
              private router:       Router,
              private page:         Page) { 
    this.user = new User();
    this.user.email = "toussi69@gmail.com";
    this.user.password = "Speed1";
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit(): void {
    if(!this.user.isValidEmail()) {
      alert("Enter a valid email addres.");
      return;
    }
    if(this.isLoggingIn) {
      this.login();
    } else { 
      this.signUp();
    }
  }

  login(): void {
    console.log("Loggin in ? ");
    this._userService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/list"]),
        (error) => alert("Unfortunately we could not find your account.")
    );
  }

  signUp(): void {
    this._userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfullly created.");
          this.toggleDisplay();
        },
        () => alert ("Unfortunately we were unable to create your account.")
      );
  }

  toggleDisplay(): void {
    this.isLoggingIn = !this.isLoggingIn;
    this.setTextFieldColors();

    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white"): new Color("#301217"),
      duration: 200
    });
  }

  setTextFieldColors(): void {
    let emailTextField = <TextField> this.email.nativeElement;
    let passwordTextField = <TextField> this.password.nativeElement;

    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color    = mainTextColor;
    passwordTextField.color = mainTextColor;

    let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }
}