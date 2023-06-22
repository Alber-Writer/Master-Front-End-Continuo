import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


export const guardRoutesGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  authService.isLogged$().subscribe((resp) => {
    if (resp) {
      return router.parseUrl(`/p/dashboard`);
    } else {
      router.navigate(['/login'])
      return false;
    }
  });

  return true;
};
