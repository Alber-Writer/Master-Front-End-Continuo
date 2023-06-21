import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private authService: AuthService) {
    this.username = '';
  }
  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }
}
