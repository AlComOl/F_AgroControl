import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Parcela } from '../models/Parcela';
@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  getTratamientoAll(): Observable <Parcela[]>{
    return this.http.get<Parcela[]>('http://127.0.0.1:80/api/tratamiento', );
  }

}
