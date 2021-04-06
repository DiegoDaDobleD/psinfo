import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alta-expediente',
  templateUrl: './alta-expediente.component.html',
  styleUrls: ['./alta-expediente.component.css']
})
export class AltaExpedienteComponent implements OnInit {
  comandancia = {};
  title = 'appBootstrap';
  closeResult: string;
  errorMessage;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
  }

  consultarPorId(id) {
    this.errorMessage = '';

    this.http.get('http://localhost:8080/comandancia/' + id).subscribe(data => {
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

  updateExpediente(id) {
    this.http.put('http://localhost:8080/comandancia/' + id, this.comandancia)
      .subscribe(res => {
          const id = res['id'];
          this.router.navigate(['alta-Expediente']);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
