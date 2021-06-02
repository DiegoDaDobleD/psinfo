import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals'

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer = {};
  token: string;

  constructor(private http: HttpClient, private router: Router,
              private globals: Globals) {
    this.token = globals['token'];
  }

  ngOnInit() {
  }

  saveCustomer() {
    const headers = { 'X-Auth-Token': this.token }
    this.http.post('http://localhost:8080/customer', this.customer, {headers})
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/customer-details/', id]);
        }, (err) => {
          console.log(err);
          if (typeof err.status === "number" && err.status == 401) {
            this.router.navigate(['/user-login/']);
          }
        }
      );
  }

}
