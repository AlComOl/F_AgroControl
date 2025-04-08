import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../../../services/incidencias.service';
import { IncidenciaFilterComponent } from '../../incidencia-filter/incidencia-filter.component';


@Component({
  selector: 'app-tipo-personal',
  imports: [CommonModule,IncidenciaFilterComponent],
  templateUrl: './tipo-stock.component.html',
  styleUrl: './tipo-stock.component.css'
})
export class TipoStockComponent {
    incidenciasStock: any;
    mostrarId: boolean=true;


    constructor(private IncidenciasService: IncidenciasService) {
        this.IncidenciasService.getIncidenciasStock()
          .subscribe(result => this.incidenciasStock = result)
    }

    seleccionarTodasIncidencias(seleccionarTodasIncidencias){

    }
}
