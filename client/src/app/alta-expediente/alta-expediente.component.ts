import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Comandancia } from '../models/comandancia';
import { ComandanciaService } from '../services/comandancia.service';

@Component({
  selector: 'app-alta-expediente',
  templateUrl: './alta-expediente.component.html',
  styleUrls: ['./alta-expediente.component.css']
})
export class AltaExpedienteComponent implements OnInit {
  comandancia: Comandancia = {
    nombre: '',
    direccion: '',
    codigoPostal: ''
  };

  title = 'appBootstrap';
  closeResult: string;
  errorMessage;

  constructor(private comandanciaService: ComandanciaService, private router: Router, private route: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit() {
  }

  consultarPorId(id) {
    this.errorMessage = '';

    this.comandanciaService.getByid(id).subscribe(data => {
      this.comandancia = data;
    }, (err) => {
      console.log(err);
      this.errorMessage = err;
      throw this.errorMessage;
    });
  }

  abrirModalPanel(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  updateExpediente() {
    const data = {
      nombre: this.comandancia.nombre,
      direccion: this.comandancia.direccion,
      codigoPostal: this.comandancia.codigoPostal
    };

    this.comandanciaService.update(this.comandancia, data)
      .subscribe(response => {
          this.router.navigate(['alta-Expediente']);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
