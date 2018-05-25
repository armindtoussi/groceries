//anuglar imports
import { NgModule } from "@angular/core";

//native script imports
import { NativeScriptModule }       from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule }  from 'nativescript-angular/forms';
import { NativeScriptHttpModule }   from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";


//app components
import { AppComponent }   from "./app.component";

import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
