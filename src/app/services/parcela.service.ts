import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcela } from '../models/Parcela';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {

  constructor(private http: HttpClient) { }

  getParcelasAll(): Observable <Parcela[]>{
    return this.http.get<Parcela[]>('http://127.0.0.1:80/api/parcelas', );
  }

}



