import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService, private router: Router) {
    this.username = 'lo';
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }
}
