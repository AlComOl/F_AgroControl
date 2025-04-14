import { Component,OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import { TareasComponent } from "./tareas/tareas.component";
import{ OrdenesService } from '../../../services/ordenes.service';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [TareasComponent],
  providers:[]
})

export class DashboardComponent implements OnInit {

  ordenesCurso: any;
  ordenesPendientes: any;
  ordenesPausadas: any;
  ordenesTerminadas: any;

  numOrdenesCurso: number=0;
  numOrdenesPendientes: number=0;
  numOrdenesPausadas: number=0;
  numOrdenesTerminadas: number=0;
  orden: any;
  public chart:Chart;


    constructor(private ordenesService: OrdenesService) {}




  ngOnInit(): void{

    this.ordenesService.getOrdenesCurso().subscribe(result => {
    this.ordenesCurso = result;
    this.numOrdenesCurso = this.ordenesCurso.filter(orden => orden.estado === 'en curso').length;
    console.log(this.numOrdenesCurso);
    this.generarGrafico();
    });

    this.ordenesService.getOrdenesPendientes().subscribe(result => {
    this.ordenesPendientes = result;
    this.numOrdenesPendientes = this.ordenesPendientes.filter(orden => orden.estado === 'pendiente').length;
    console.log(this.ordenesPendientes);
    this.generarGrafico();
      });

    this.ordenesService.getOrdenesPausa().subscribe(result => {
    this.ordenesPausadas = result;
    this.numOrdenesPausadas = this.ordenesPausadas.filter(orden => orden.estado === 'pausadas').length;
    console.log(this.numOrdenesPausadas);
    this.generarGrafico();
      });


    this.ordenesService.getOrdenesTerminadas().subscribe(result => {
    this.ordenesTerminadas = result;
    this.numOrdenesTerminadas = this.ordenesTerminadas.filter(orden => orden.estado === 'completada').length;
    console.log(this.ordenesTerminadas);
    this.generarGrafico();
     });
  }


    generarGrafico():void{
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const chart = {
      labels: [
        'En curso',
        'Pendiente',
        'Pausada',
        'Terminada',
      ],
      datasets: [{
        label: 'Estado Ordenes',
        data: [
        this.ordenesCurso.filter(orden => orden.estado === 'en curso').length,
        this.ordenesPendientes.filter(orden => orden.estado === 'pendiente').length,
        this.ordenesPausadas.filter(orden => orden.estado === 'pausada').length,
        this.ordenesTerminadas.filter(orden => orden.estado === 'completada').length,
        ],
        backgroundColor: [
          'rgb(26, 85, 3)',
          'rgb(175, 24, 13)',
          'rgb(198, 172, 2)',
          'rgb(81, 102, 235)',
        ],
        hoverOffset: 5
      }]
    };

    this.chart = new Chart(ctx, {
      type: 'doughnut',  // Tipo de gráfico
      data: chart,  // Datos
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

