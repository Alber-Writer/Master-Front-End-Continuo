import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})

export class PrivateHeaderComponent implements OnInit{
  username: string;

  constructor(private authService:AuthService, private router:Router){
    this.username = "lo";
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.authService.getUsername$().subscribe(
      data => this.username = data
    )
  }
}