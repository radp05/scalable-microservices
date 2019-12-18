import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


//auth guard service
@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {

    public canActivate(): boolean {
        const token = localStorage.getItem('id_token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['login'])
            return false;
        }
    }

    constructor(private router: Router) {

    }
    ngOnInit() {

    }
}
