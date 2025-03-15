import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesService } from '../../../../services/ordenes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  imports: [CommonModule,RouterModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

  ordenesCurso: any;
  ordenSeleccionada:any;
  parcela:any;
  tarea:any;
  fecha_inicio:any;

  constructor(private ordenesService: OrdenesService) {
        this.ordenesService.getOrdenesCurso()
          .subscribe(result => this.ordenesCurso = result)
    }

    ShowOrdenesCurso(orden: any) {
      console.log(orden);
      this.ordenSeleccionada = orden;
    }

    testClick() {
      console.log("¡Botón clickeado!");
    }
}
