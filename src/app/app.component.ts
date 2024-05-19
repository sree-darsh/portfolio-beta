import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template:
    '<app-header *ngIf=!isLoginPage></app-header><router-outlet></router-outlet><app-footer></app-footer> ',
})
export class AppComponent implements OnInit {
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login'; // Adjust this condition as per your route setup
        console.log(this.isLoginPage);
      }
    });
  }
}
