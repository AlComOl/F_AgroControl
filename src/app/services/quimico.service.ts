import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuimicosService {

  private apiUrl = 'http://127.0.0.1/api/quimicos';

  constructor(private http: HttpClient) { }

  obtenerQuimicos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  hacerPedido(pedido: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pedidos`, { productos: pedido });
  }

}
