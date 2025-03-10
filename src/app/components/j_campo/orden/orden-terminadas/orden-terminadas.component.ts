import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../../../services/ordenes.service';

@Component({
  selector: 'app-orden-terminadas',
  imports: [CommonModule],
  templateUrl: './orden-terminadas.component.html',
  styleUrl: './orden-terminadas.component.css'
})
export class OrdenTerminadasComponent {
  ordenesTerminadas: any;
  ordenSeleccionada:any;
  parcela:any;
  tarea:any;
  fecha_inicio:any;

  constructor(private ordenesService: OrdenesService) {
      this.ordenesService.getOrdenesTerminadas()
        .subscribe(result => this.ordenesTerminadas = result)
  }

  seleccionarOrdenTerminada(orden:any){
    console.log(orden);
    this.ordenSeleccionada = orden;
  }
}
