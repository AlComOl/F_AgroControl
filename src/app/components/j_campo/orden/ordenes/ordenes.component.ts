import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesService } from '../../../../services/ordenes.service';
import { Router, RouterModule } from '@angular/router';
import { OrderFilterComponent } from '../order-filter/order-filter.component';

@Component({
  selector: 'app-ordenes',
  imports: [CommonModule,RouterModule,OrderFilterComponent],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {
  mostrarId: boolean=true;
  ordenesTodas: any;
  ordenSeleccionada:any;
  parcela:any;
  tarea:any;
  fecha_inicio:any;
  todasVisible=true;

  constructor(private ordenesService: OrdenesService, private router:Router) {
        this.ordenesService.getOrdenesTodas()
          .subscribe(result => this.ordenesTodas = result)
    }

    // ShowOrdenesCurso(orden: any) {
    //   console.log(orden);
    //   this.ordenSeleccionada = orden;
    // }

    seleccionarTodasOrdenes(ordenTodas:any){
       console.log(ordenTodas);
       this.ordenSeleccionada = ordenTodas;
    }



}
