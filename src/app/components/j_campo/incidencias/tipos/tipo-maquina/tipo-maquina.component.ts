import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../../../services/incidencias.service';
import { IncidenciaFilterComponent } from '../../incidencia-filter/incidencia-filter.component';

@Component({
  selector: 'app-tipo-personal',
  imports: [CommonModule,IncidenciaFilterComponent],
  templateUrl: './tipo-maquina.component.html',
  styleUrl: './tipo-maquina.component.css'
})
export class TipoMaquinaComponent {
    incidenciasMaquina: any;
    incidencias:any;
    parcela:any;
    tarea:any;
    fecha_inicio:any;
    mostrarId: boolean=true;

    constructor(private IncidenciasService: IncidenciasService) {
        this.IncidenciasService.getIncidenciasMaquina()
          .subscribe(result => this.incidenciasMaquina = result)
    }

    seleccionarTodasIncidencias(incidenciasTodas){
      console.log(incidenciasTodas);
      this.incidencias = incidenciasTodas;
    }
}
