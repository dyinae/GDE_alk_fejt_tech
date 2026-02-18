import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}


  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      username,
      password
    });
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      username,
      password
    });
  }


  setLoggedIn(username: string) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
