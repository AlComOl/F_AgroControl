import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../../../services/ordenes.service';
import { OrdenesComponent } from '../ordenes/ordenes.component';

@Component({
  selector: 'app-orden-pausadas',
  imports: [CommonModule,OrdenesComponent],
  templateUrl: './orden-pausadas.component.html',
  styleUrl: './orden-pausadas.component.css'
})
export class OrdenPausadasComponent {
    ordenSeleccionada:any;
    ordenesPausadas: any;
    ordenPausa:any;
    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private ordenesService: OrdenesService) {
        this.ordenesService.getOrdenesPausa()
          .subscribe(result => this.ordenesPausadas = result)
    }

    seleccionarOrdenPausa(orden:any){
      console.log(orden);
      this.ordenSeleccionada = orden;
    }


}
