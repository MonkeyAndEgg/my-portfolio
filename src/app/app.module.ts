import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './activities/header/header.module';
import { SidenavComponent } from './activities/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContentComponent } from './activities/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
