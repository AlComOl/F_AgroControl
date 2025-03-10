import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../../../services/incidencias.service';
import { TrabajadoresService } from '../../../../../services/trabajadores.service';
@Component({
  selector: 'app-tipo-personal',
  imports: [CommonModule],
  templateUrl: './tipo-personal.component.html',
  styleUrl: './tipo-personal.component.css'
})
export class TipoPersonalComponent {
  incidenciasPersonal: any;
  ordenSeleccionada:any;
  persona:any;

    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private IncidenciasService: IncidenciasService,private trabajadoresService:TrabajadoresService) {

        this.IncidenciasService.getIncidenciasPersonal()
          .subscribe(result => this.incidenciasPersonal = result)
    }

    seleccionarIncidenciaP(orden:any){
      console.log(orden);

      this.ordenSeleccionada = orden;

     

      // this.trabajadoresService.obtenerAplicadorporId(orden.user_id).subscribe(result => {this.persona = result});
      // console.log(this.persona);NO
    }


}

