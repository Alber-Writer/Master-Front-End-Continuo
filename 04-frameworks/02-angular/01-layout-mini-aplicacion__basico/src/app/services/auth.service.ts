import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = 'not logged user';
  private logged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getUsername(): string {
    return this.username;
  }

  login$(username: string, password: string): Observable<boolean> {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      setTimeout(() => {//added to avoid other eager rxjs subscriptions triggers
        this.logged$.next(true);
        this.username = username;
        this.setCacheLogin();
      }, 2000);
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }
  logout(): void {
    this.logged$.next(false);
    this.username = '';
    this.removeCacheLogin();
  }
  isLogged$(): Observable<boolean> {
    const [logged, username] = this.getCacheLogin();
    if (logged === 'true' && username) {
      this.logged$.next(true);
      this.username = username;
    }
    return this.logged$.asObservable();
  }
  /* localStorage cache methods as test... no token provided*/
  private setCacheLogin() {
    localStorage.setItem('logged', `${this.logged$.value}`);
    localStorage.setItem('username', `${this.username}`);
  }
  private getCacheLogin() {
    return [localStorage.getItem('logged'), localStorage.getItem('username')];
  }
  private removeCacheLogin() {
    localStorage.removeItem('logged');
    localStorage.removeItem('username');
  }
}
