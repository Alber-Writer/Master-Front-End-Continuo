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
  constructor(private authService:AuthService, private router:Router) {
    this.username = 'master8@lemoncode.net';
    this.password = '12345678';
  }

  checkCredentials(){
    const canAccess = this.authService.login(this.username, this.password);
    if(canAccess){
      this.router.navigate(['/dashboard']);
      return true
    }else {
      alert("Incorrect user/password")
      return false
    }

  }
}
