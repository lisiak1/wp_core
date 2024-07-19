import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _router: Subscription | undefined;
  @ViewChild(NavbarComponent) navbar: NavbarComponent | undefined;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef // public location: Location
  ) {}
  ngOnInit() {
    const navbar: HTMLElement =
      this.element.nativeElement.children[0].children[0];

    this._router = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          if (
            window.document.activeElement &&
            'scrollTop' in window.document.activeElement
          ) {
            (window.document.activeElement as HTMLElement).scrollTop = 0;
          }
        }
        this.navbar?.sidebarClose();
      });
    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        // add logic
        navbar.classList.remove('navbar-transparent');
      } else {
        // remove logic
        navbar.classList.add('navbar-transparent');
      }
    });
    //const ua = window.navigator.userAgent;
    // const trident = ua.indexOf('Trident/');
    // if (trident > 0) {
    //   // IE 11 => return version number
    //   const rv = ua.indexOf('rv:');
    //   var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    // }
    // if (version) {
    //   const body = document.getElementsByTagName('body')[0];
    //   body.classList.add('ie-background');
    // }
  }
}
