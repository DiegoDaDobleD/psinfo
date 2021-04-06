import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comandancia',
  templateUrl: './comandancia.component.html',
  styleUrls: ['./comandancia.component.css']
})
export class ComandanciaComponent implements OnInit {
  comandancias: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/comandancia').subscribe(data => {
      this.comandancias = data;
    });
  }

  goAltaComandancia() {
    this.router.navigate(['alta-comandancia']);
  }

}
