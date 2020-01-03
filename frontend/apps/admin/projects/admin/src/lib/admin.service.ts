import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(@Inject('env') private env: any) {
    console.log(env);
  }
}
