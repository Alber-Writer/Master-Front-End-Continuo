import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = '01-layout-mini-aplicacion__basico';
  logged: boolean;
  constructor(private authService: AuthService) {
    this.logged = false;
  }
  ngOnInit():void{
    this.authService.isLogged$().subscribe(data=> this.logged = data)
  }
}
