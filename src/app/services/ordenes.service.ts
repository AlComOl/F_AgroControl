import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from '../models/Orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private apiUrl = 'http://0.0.0.0/api/ordenes';

  constructor(private http: HttpClient) {}

  enviarOrden(datosOrden: any): Observable<any> {


    return this.http.post(this.apiUrl, datosOrden);

  }

  getOrdenesPendientes() {
    return this.http.get('http://127.0.0.1:80/api/ordenesPendientes');
  }

  getOrdenesCurso() {
    return this.http.get('http://0.0.0.0/api/ordenesCurso');
  }

  getOrdenesPausa() {
    return this.http.get('http://127.0.0.1:80/api/ordenesPausadas');
  }

  getOrdenById(id: any) {
    console.log(id);
    return this.http.get<Orden[]>('http://0.0.0.0/api/orden/'+id);
  }

  getOrdenesTerminadas() {
    return this.http.get('http://127.0.0.1:80/api/ordenesTerminadas');
  }
}




