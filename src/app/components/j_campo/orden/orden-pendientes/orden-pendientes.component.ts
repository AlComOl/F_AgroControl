import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../../../services/ordenes.service';
import { OrdenesComponent } from '../ordenes/ordenes.component';



@Component({
  selector: 'app-orden-pendientes',
  imports: [CommonModule,OrdenesComponent],
  templateUrl: './orden-pendientes.component.html',
  styleUrl: './orden-pendientes.component.css'
})
export class OrdenPendientesComponent {
  ordenesPendientes: any;
  isVisible: any = false;;
  parcela:any;
  tarea:any;
  fecha_inicio:any;
  ordenSeleccionada: any = null;


  constructor(private ordenesService: OrdenesService) {
      this.ordenesService.getOrdenesPendientes()
        .subscribe(result => this.ordenesPendientes = result)
  }

  seleccionarOrden(orden: any) {
    console.log(orden);
    this.ordenSeleccionada = orden;
  }
}

