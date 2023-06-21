import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string;
  password: string;
  showSpinner: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
    this.showSpinner = false;
  }

  checkCredentials() {
    this.showSpinner = true;
    this.authService.login$(this.username, this.password).subscribe((resp) => {
      let canAccess;
      this.showSpinner = false;
      canAccess = resp;
      if (canAccess) {
        this.router.navigate(['/dashboard']);
        return true;
      } else {
        alert(`Incorrect user/password.\n` +
        `Please introduce valid credentials.`);
        return false;
      }
    });
  }
}
