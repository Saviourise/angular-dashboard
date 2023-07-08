import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  page = 'dashboard';
  constructor(private router: Router) {
    this.page = this.router.url === '/' ? 'dashboard' : this.router.url;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const nav: any = document.getElementById('sidebar_component');
        const icon: any = document.getElementsByClassName('icon')[0];
        nav.classList.add('close');
        icon.classList.remove('toggle');
      }
    });
  }

  togglenav(): void {
    const nav: any = document.getElementById('sidebar_component');
    const icon: any = document.getElementsByClassName('icon')[0];
    icon.classList.toggle('toggle');
    nav.classList.toggle('close');
  }
}
