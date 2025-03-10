import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor(private http: HttpClient) { }

  obtenerAplicadores(){
    return this.http.get<User[]>('http://127.0.0.1:8000/api/aplicadores')
  }


}
