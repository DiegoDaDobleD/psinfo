import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comandancia} from '../models/comandancia';
import {environment} from '../../environments/environment';


const baseUrl = environment.serverUrl + '/comandancia';


@Injectable({
  providedIn: 'root'
})

export class ComandanciaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comandancia[]> {
    return this.http.get<Comandancia[]>(baseUrl);
  }

  getByid(id: any): Observable<Comandancia> {
    return this.http.get<Comandancia>(baseUrl + '/show/' + id);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/save', data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl + '/update', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(baseUrl + '/delete/' + id);
  }

}
