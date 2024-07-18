import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(NavbarComponent) navbar: NavbarComponent | undefined;
  title = 'wp-core';
}
