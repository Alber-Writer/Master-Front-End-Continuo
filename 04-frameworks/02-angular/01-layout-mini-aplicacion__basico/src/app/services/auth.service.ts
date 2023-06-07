import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username$: BehaviorSubject<string> = new BehaviorSubject(
    'not logged user'
  );
  private logged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getUsername$(): Observable<string> {
    return this.username$.asObservable();
  }

  login(username: string, password: string): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.logged$.next(true);
      this.username$.next(username);
      this.setCacheLogin();
      return true;
    }
    return false;
  }
  logout(): void {
    this.logged$.next(false);
    this.username$.next('');
    this.removeCacheLogin();
  }
  isLogged$(): Observable<boolean> {
    const [ logged, username ] = this.getCacheLogin();
    if(logged === 'true' && username){
      this.logged$.next(true);
      this.username$.next(username);
    }
    return this.logged$.asObservable();
  }
  /* Métodos cache localStorage solamente de prueba... sin token, son inseguros 100% : */
  private setCacheLogin() {
    localStorage.setItem('logged', `${this.logged$.value}`);
    localStorage.setItem('username', `${this.username$.value}`);
  }
  private getCacheLogin() {
    return [localStorage.getItem('logged'), localStorage.getItem('username')];
  }
  private removeCacheLogin() {
    localStorage.removeItem('logged');
    localStorage.removeItem('username');
  }
}
