import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ListarCustomer() {
    this.router.navigate(['customers']);
  }

  ListarComandancias() {
    this.router.navigate(['listar-comandancias']);
  }

  goToAltaExpediente() {
    this.router.navigate(['alta-Expediente']);
  }
}
