import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import xml2js from 'xml2js';
import {Globals} from '../globals'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;
  token: string;
  errorMessage;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
              private globals: Globals) {
    this.token = globals['token'];
    // console.info ('listado constructor: ' + globals['token']);
  }

  ngOnInit() {
    // console.info ('listado ngOnInit: ' + this.token);
    const headers = {'X-Auth-Token': this.token, 'Content-Type': 'text/xml'}
    this.http.get('http://localhost:8080/customer', {headers, responseType: 'text'}).subscribe(data =>{
      // this.customers = data;
      this.parseXML(data)
        .then((data) => {
          console.info(data);
          this.customers = data;
      });
      console.info(this.customers);
    }, (err) => {
        console.log(err);
        if (typeof err.status === "number" && err.status == 401) {
          this.router.navigate(['/user-login/']);
        }
    });
  }

  getPendingCustomers() {
    const headers = { 'X-Auth-Token': this.token }
    this.http.get('http://localhost:8080/pendingCustomers/', {headers})
      .subscribe(data => {
        this.customers = data;
        console.info(this.customers);
        this.router.navigate(['/customers']);
      }, (err) => {
        console.log(err);
        console.info('error' + err.status);
        console.info(typeof err.status);
        if (typeof err.status === "number" && err.status == 401) {
          this.router.navigate(['/user-login/']);
       } else {
          this.errorMessage = err;
          throw this.errorMessage;
       }
     }
    );
  }

  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.list;
        for (k in obj.customer) {
          var item = obj.customer[k];
          arr.push({
            id: item.$['id'],
            name: item.name[0],
            address: item.address[0],
            phone: item.phone[0],
            done: item.done[0],
            postalCode: item.postalCode[0],
            city: item.city[0]
          });
        }
        resolve(arr);
      });
    });
  }

//  goCustomerCreate(){
//    this.router.navigate(['customer-create']);
//  }

}
