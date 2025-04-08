import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../../../services/incidencias.service';
import { TrabajadoresService } from '../../../../../services/trabajadores.service';
import { OrdenesService } from '../../../../../services/ordenes.service';
import { IncidenciaFilterComponent  } from '../../incidencia-filter/incidencia-filter.component';

@Component({
  selector: 'app-tipo-personal',
  imports: [CommonModule,IncidenciaFilterComponent],
  templateUrl: './tipo-personal.component.html',
  styleUrl: './tipo-personal.component.css'
})
export class TipoPersonalComponent {
  incidenciasPersonal: any = [];
  incidenciaSeleccionada: any;
  ordenSeleccionada:any;
  persona:any;
  mostrarId: boolean=true;
    parcela:any;
    tarea:any;
    fecha_inicio:any;


    personasCache: { [key: number]: any } = {}; // Cache para guardar las personas

    constructor(private IncidenciasService: IncidenciasService,private trabajadoresService:TrabajadoresService, private ordenesService:OrdenesService) {

        this.IncidenciasService.getIncidenciasPersonal()
          .subscribe(result => this.incidenciasPersonal = result)
    }

    seleccionarIncidenciaP(incidencia:any){

      this.incidenciaSeleccionada = incidencia;

      console.log(this.incidenciaSeleccionada);



      let id = incidencia.orden_id;




      this.ordenesService.getOrdenById(id).subscribe(result => {
        this.ordenSeleccionada = result;
        this.ordenSeleccionada = this.ordenSeleccionada[0];
        console.log(this.ordenSeleccionada);
      });
      console.log(this.ordenSeleccionada);

      // this.trabajadoresService.obtenerAplicadorporId(orden.user_id).subscribe(result => {this.persona = result});
      // console.log(this.persona);NO
    }

    buscarPersona(id: any) {

      console.log(id);
      if (this.personasCache[id]) {
        return this.personasCache[id];
      } else {
        this.trabajadoresService.obtenerAplicadorporId(id).subscribe(result => {
          this.personasCache[id] = result;
        });
        console.log(this.personasCache);
        return "Cargando..."; // Mientras esperamos la respuesta, retornamos null o un valor vacío
      }
    }
    seleccionarTodasIncidencias(incidenciasPersonal:any){


    }

}

