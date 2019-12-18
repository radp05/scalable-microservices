import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
const URL = 'http://localhost:4000/api/v1/login';
const errorMessage = 'An error occured. Please try again later'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage:string;
  errorStatus:boolean

  form: FormGroup = new FormGroup({
   
    userName:  new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
  
  constructor(private http: HttpClient, private router:Router) { }
  submit() {
    this.http.post(URL, this.form.value)
        .subscribe((responseData) => {
          localStorage.setItem('id_token', responseData['token']);
          this.router.navigate(['/home']);
        },
        error=>{
          this.errorStatus = true;
          this.errorMessage = errorMessage
        })

  }
  

  ngOnInit() {
    
  }


}
