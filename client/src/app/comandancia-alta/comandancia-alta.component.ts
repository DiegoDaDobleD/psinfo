import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comandancia } from '../models/comandancia';
import { ComandanciaService } from '../services/comandancia.service';

@Component({
  selector: 'app-comandancia-alta',
  templateUrl: './comandancia-alta.component.html',
  styleUrls: ['./comandancia-alta.component.css']
})
export class ComandanciaAltaComponent implements OnInit {
  comandancia: Comandancia = {
    nombre: '',
    direccion: '',
    codigoPostal: ''
  };

  constructor(private comandanciaService: ComandanciaService, private router: Router) { }

  ngOnInit() {
  }

  altaComandancia() {
    const data = {
      nombre: this.comandancia.nombre,
      direccion: this.comandancia.direccion,
      codigoPostal: this.comandancia.codigoPostal
    };

    this.comandanciaService.create(data)
      .subscribe(response => {
          console.log(response);
          this.router.navigate(['listar-comandancias']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
