import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { TareasComponent } from "./tareas/tareas.component";
import { OrdenesService } from '../../../services/ordenes.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [TareasComponent],
  providers: []
})

export class DashboardComponent implements OnInit {

  ordenesCurso: any;
  ordenesPendientes: any;
  ordenesPausadas: any;
  ordenesTerminadas: any;

  numOrdenesCurso: number = 0;
  numOrdenesPendientes: number = 0;
  numOrdenesPausadas: number = 0;
  numOrdenesTerminadas: number = 0;
  orden: any;
  public chart: Chart;

  constructor(private ordenesService: OrdenesService) {}

  ngOnInit(): void {

    // Cargar órdenes en curso
    this.ordenesService.getOrdenesCurso().subscribe(result => {
      this.ordenesCurso = result;
      this.numOrdenesCurso = this.ordenesCurso.filter(orden => orden.estado === 'en curso').length;
      console.log('Órdenes en curso:', this.numOrdenesCurso);
      this.generarGrafico();
    });

    // Cargar órdenes pendientes
    this.ordenesService.getOrdenesPendientes().subscribe(
      (result) => {
        this.ordenesPendientes = result;
        console.log('Órdenes pendientes:', this.ordenesPendientes);  // Para verificar qué datos llegan
        this.numOrdenesPendientes = this.ordenesPendientes.filter(orden => orden.estado === 'pendiente').length;
        this.generarGrafico();
      },
      (error) => {
        console.error('Error al obtener las órdenes pendientes:', error);
      }
    );

    // Cargar órdenes pausadas
    this.ordenesService.getOrdenesPausa().subscribe(result => {
      this.ordenesPausadas = result;
      this.numOrdenesPausadas = this.ordenesPausadas.filter(orden => orden.estado === 'pausada').length;
      console.log('Órdenes pausadas:', this.numOrdenesPausadas);
      this.generarGrafico();
    });

    // Cargar órdenes terminadas
    this.ordenesService.getOrdenesTerminadas().subscribe(result => {
      this.ordenesTerminadas = result;
      this.numOrdenesTerminadas = this.ordenesTerminadas.filter(orden => orden.estado === 'completada').length;
      console.log('Órdenes terminadas:', this.numOrdenesTerminadas);
      this.generarGrafico();
    });
  }

  // Método para generar gráfico
  generarGrafico(): void {
    // Comprobar si los datos necesarios están disponibles antes de generar el gráfico
    if (this.ordenesCurso && this.ordenesPendientes && this.ordenesPausadas && this.ordenesTerminadas) {
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
          label: 'Estado Órdenes',
          data: [
            this.ordenesCurso.filter(orden => orden.estado === 'en curso').length,
            this.ordenesPendientes.filter(orden => orden.estado === 'pendiente').length,
            this.ordenesPausadas.filter(orden => orden.estado === 'pausada').length,
            this.ordenesTerminadas.filter(orden => orden.estado === 'completada').length,
          ],
          backgroundColor: [
            'rgb(26, 85, 3)',    // Color para 'En curso'
            'rgb(175, 24, 13)',  // Color para 'Pendiente'
            'rgb(198, 172, 2)',  // Color para 'Pausada'
            'rgb(81, 102, 235)', // Color para 'Terminada'
          ],
          hoverOffset: 5
        }]
      };

      this.chart = new Chart(ctx, {
        type: 'doughnut',  // Tipo de gráfico
        data: chart,  // Datos del gráfico
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } else {
      console.warn('No se han cargado todos los datos para generar el gráfico.');
    }
  }
}
