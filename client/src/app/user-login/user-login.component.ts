import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user = {};

  constructor(private http: HttpClient, private router: Router,
              private globals: Globals) { }

  ngOnInit() {
  }

  loginUser() {
    this.http.post<any>('http://localhost:8080/api/login', this.user)
      .subscribe(res => {
        this.globals.token = res['access_token'];
        this.router.navigate(['/home/']);
      }, (err) => {
        console.log(err);
        if (typeof err.status === "number" && err.status == 401) {
          this.user['username'] = '';
          this.user['password'] = '';
        }
      });
  }


}
