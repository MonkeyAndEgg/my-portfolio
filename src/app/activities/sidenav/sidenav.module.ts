import { NgModule } from "@angular/core";
import { SidenavComponent } from "./sidenav.component";
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    MatButtonModule,
    FontAwesomeModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule {

}
