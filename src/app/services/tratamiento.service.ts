import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from '../models/Tratamiento';
@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  getTratamientoAll(): Observable <Tratamiento[]>{
    return this.http.get<Tratamiento[]>('http://0.0.0.0/api/tratamiento', );
  }

}
  