"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
//models
var user_1 = require("../../shared/user/user");
//services 
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, router, page) {
        this._userService = _userService;
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "toussi69@gmail.com";
        this.user.password = "Speed1";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email addres.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("Loggin in ? ");
        this._userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfullly created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: './pages/login/login.html',
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUErQztBQUMvQyxnQ0FBdUM7QUFDdkMsK0JBQXFDO0FBRXJDLG1EQUFxRDtBQUdyRCxRQUFRO0FBQ1IsK0NBQThDO0FBRTlDLFdBQVc7QUFDWCwrREFBNkQ7QUFRN0Q7SUFVRSx3QkFBb0IsWUFBeUIsRUFDekIsTUFBb0IsRUFDcEIsSUFBa0I7UUFGbEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBUnRDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBUzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFD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QVc7WUFDWCxlQUFNO1lBQ04sV0FBSTtPQVozQixjQUFjLENBOEUxQjtJQUFELHFCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gICAgICAgICBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9ICAgICAgICBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9ICAgICAgICAgZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBzZXRIaW50Q29sb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGludC11dGlsXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9ICAgIGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG4vL21vZGVsc1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuXHJcbi8vc2VydmljZXMgXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXMvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcblxyXG4gIGlzTG9nZ2luZ0luOiBib29sZWFuID0gdHJ1ZTtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZW1haWxcIikgZW1haWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiAgICAgICBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiAgICAgICAgIFBhZ2UpIHsgXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJ0b3Vzc2k2OUBnbWFpbC5jb21cIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiU3BlZWQxXCI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpOiB2b2lkIHtcclxuICAgIGlmKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpIHtcclxuICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlcy5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dpbigpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luIGluID8gXCIpO1xyXG4gICAgdGhpcy5fdXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2lnblVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBhbGVydCAoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgdGhpcy5zZXRUZXh0RmllbGRDb2xvcnMoKTtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIik6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXHJcbiAgICAgIGR1cmF0aW9uOiAyMDBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dEZpZWxkQ29sb3JzKCk6IHZvaWQge1xyXG4gICAgbGV0IGVtYWlsVGV4dEZpZWxkID0gPFRleHRGaWVsZD4gdGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHBhc3N3b3JkVGV4dEZpZWxkID0gPFRleHRGaWVsZD4gdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGxldCBtYWluVGV4dENvbG9yID0gbmV3IENvbG9yKHRoaXMuaXNMb2dnaW5nSW4gPyBcImJsYWNrXCIgOiBcIiNDNEFGQjRcIik7XHJcbiAgICBlbWFpbFRleHRGaWVsZC5jb2xvciAgICA9IG1haW5UZXh0Q29sb3I7XHJcbiAgICBwYXNzd29yZFRleHRGaWVsZC5jb2xvciA9IG1haW5UZXh0Q29sb3I7XHJcblxyXG4gICAgbGV0IGhpbnRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCIjQUNBNkE3XCIgOiBcIiNDNEFGQjRcIik7XHJcbiAgICBzZXRIaW50Q29sb3IoeyB2aWV3OiBlbWFpbFRleHRGaWVsZCwgY29sb3I6IGhpbnRDb2xvciB9KTtcclxuICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IHBhc3N3b3JkVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xyXG4gIH1cclxufSJdfQ==