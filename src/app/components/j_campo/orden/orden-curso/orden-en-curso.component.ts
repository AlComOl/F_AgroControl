import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../../../services/ordenes.service';
import { OrderFilterComponent } from '../order-filter/order-filter.component';



@Component({
  selector: 'app-orden-en-curso',
  imports: [CommonModule, OrderFilterComponent],
  templateUrl: './orden-en-curso.component.html',
  styleUrl: './orden-en-curso.component.css'
})
export class OrdenEnCursoComponent {
  ordenesCurso: any;
  ordenSeleccionada:any;
  parcela:any;
  tarea:any;
  fecha_inicio:any;
  mostrarId:boolean=false;

  constructor(private ordenesService: OrdenesService) {
      this.ordenesService.getOrdenesCurso()
        .subscribe(result => this.ordenesCurso = result)
  }

  seleccionarOrdenCurso(orden: any) {
    console.log(orden);
    this.ordenSeleccionada = orden;
    this.mostrarId = true;
  }
}
