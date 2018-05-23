"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("~/pages/list/list.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCw4REFBNkQ7QUFHaEQsUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFNLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzNDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztDQUM1QyxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyxnQ0FBYztJQUNkLDhCQUFhO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9ICBmcm9tICd+L3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBMaXN0Q29tcG9uZW50XHJcbl07Il19