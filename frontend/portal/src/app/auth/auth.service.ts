import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { ErrorService } from '../service/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorService: ErrorService
  ) { }

  login(username: string, password: string) {
    const data = {
      username,
      password
    }
    localStorage.setItem('access_token', username);
    this.router.navigate(['/home']);
    // this.http.post(environment.apiEndPoint + environment.login.api, data)
    // .subscribe((response) => {
    //   localStorage.setItem('access_token', response['token']);
    //     this.router.navigate(['/home']);
    // }, err => {
    //   console.log(err);
    //   console.log(err.message);
    //    this.errorService.thorwError('Invalid username or password!');
    // });
  }

  isAuthenticated() {
    const token = localStorage.getItem('access_token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
