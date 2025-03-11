import { Component,ViewChild,ElementRef } from '@angular/core';
import { TareasComponent } from "./tareas/tareas.component";
import { Modal } from 'bootstrap';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

import{ OrdenesService } from './../../../services/ordenes.service';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [CommonModule],
  providers:[DatePipe]
})

export class DashboardComponent {

  fecha: any = null;

  ordenesCurso: any;

  parcela:any;
  tarea:any;
  fecha_inicio:any;

  constructor(private datePipe: DatePipe, private ordenesService: OrdenesService) {
    let fechaN = this.datePipe.transform(new Date(), 'yyyy-MMMM-dd');
    let fechaF = fechaN!.split("-");
    let dia = fechaF[2];
    let mes = fechaF[1];
    let anyo = fechaF[0];
    switch (mes) {
      case 'January':
        mes = 'Enero';
        break;
      case 'February':
        mes = 'Febrero';
        break;
      case 'March':
        mes = 'Marzo';
        break;
      case 'April':
        mes = 'Abril';
        break;
      case 'May':
        mes = 'Mayo';
        break;
      case 'June':
        mes = 'Junio';
        break;
      case 'July':
        mes = 'Julio';
        break;
      case 'August':
        mes = 'Agosto';
        break;
      case 'September':
        mes = 'Septiembre';
        break;
      case 'October':
        mes = 'Octubre';
        break;
      case 'November':
        mes = 'Noviembre';
        break;
      case 'December':
        mes = 'Diciembre';
        break;

    }

    this.fecha = dia + ' de ' + mes + ' de ' + anyo;

        this.ordenesService.getOrdenesCurso()
          .subscribe(result => this.ordenesCurso = result)

}




 @ViewChild('incidenciaModal') incidenciaModal: ElementRef | undefined;


  abrirModalIncidencia(): void {
    if (this.incidenciaModal) {
      const modal = new Modal(this.incidenciaModal.nativeElement);
      modal.show();  // Mostrar el modal
    }
  }

}
