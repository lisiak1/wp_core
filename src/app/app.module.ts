import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  // other providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
