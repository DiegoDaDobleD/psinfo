import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comandancia-alta',
  templateUrl: './comandancia-alta.component.html',
  styleUrls: ['./comandancia-alta.component.css']
})
export class ComandanciaAltaComponent implements OnInit {
  comandancia = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  altaComandancia() {
    this.http.post('http://localhost:8080/comandancia', this.comandancia)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['listar-comandancias']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
