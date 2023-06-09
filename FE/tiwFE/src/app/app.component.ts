import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiwFE';
  isAuthenticated: boolean = false;

  constructor(public authService: AuthService, public router: Router) {
    this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => this.isAuthenticated = isAuthenticated
    );
  }
  ngOnInit(): void {
    console.log("INIZIO DELL'APP")
    this.authService.logout();
    window.addEventListener('beforeunload', (event) => {
      this.authService.logout();
    });
  }
}
