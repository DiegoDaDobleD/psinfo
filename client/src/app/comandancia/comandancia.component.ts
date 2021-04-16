import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Comandancia } from '../models/comandancia';
import { ComandanciaService } from '../services/comandancia.service';


@Component({
  selector: 'app-comandancia',
  templateUrl: './comandancia.component.html',
  styleUrls: ['./comandancia.component.css']
})
export class ComandanciaComponent implements OnInit {
  comandancias?: Comandancia[];
  constructor(private comandanciaService: ComandanciaService, private router: Router ) { }

  ngOnInit() {
    this.getComandancias();
  }

  getComandancias() {
    this.comandanciaService.getAll().subscribe(
      data => {
        this.comandancias = data;
        console.log(data);
      },
      error => {
          console.log(error);
      }
    );
  }

  goAltaComandancia() {
    this.router.navigate(['alta-comandancia']);
  }

}
