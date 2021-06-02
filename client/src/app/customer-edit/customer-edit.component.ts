import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer = {};
  token: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
              private globals: Globals) {
    this.token = globals['token'];
  }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
  }

  getCustomer(id) {
    const headers = { 'X-Auth-Token': this.token }
    this.http.get('http://localhost:8080/customer/'+id, {headers}).subscribe(data => {
      this.customer = data;
    }, (err) => {
        console.log(err);
        if (typeof err.status === "number" && err.status == 401) {
          this.router.navigate(['/user-login/']);
        }
    });
  }

  updateCustomer(id) {
    const headers = { 'X-Auth-Token': this.token }
    this.http.put('http://localhost:8080/customer/'+id, this.customer, {headers})
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/customer-details', id]);
        }, (err) => {
          console.log(err);
          if (typeof err.status === "number" && err.status == 401) {
            this.router.navigate(['/user-login/']);
          }
        }
      );
  }

}
