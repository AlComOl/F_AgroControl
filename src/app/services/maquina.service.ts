import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maquina } from '../models/Maquina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  constructor(private http: HttpClient) {}


  getMaquinas(): Observable <Maquina[]>{
        return this.http.get<Maquina[]>('http://127.0.0.1/api/maquinas', );

  }

}
