import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {Globals} from '../globals'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer = {};
  token: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
              private globals: Globals) {
    this.token = globals['token'];
  }

  ngOnInit() {
    this.getCustomerDetail(this.route.snapshot.params['id']);
  }

  getCustomerDetail(id) {
    console.info(id);
    const headers = { 'X-Auth-Token': this.token }
    this.http.get('http://localhost:8080/customer/'+id, {headers})
      .subscribe(data => {
        this.customer = data;
      }, (err) => {
        console.log(err);
        // console.info('error' + err.status);
        // console.info(typeof err.status);
        if (typeof err.status === "number" && err.status == 401) {
          this.router.navigate(['/user-login/']);
        }
      }
    );
  }

  deleteCustomer(id) {
    const headers = { 'X-Auth-Token': this.token }
    this.http.delete('http://localhost:8080/customer/'+id, {headers})
      .subscribe(res => {
          this.router.navigate(['/customers']);
        }, (err) => {
          console.log(err);
          if (typeof err.status === "number" && err.status == 401) {
            this.router.navigate(['/user-login/']);
          }
        }
      );
  }

}
