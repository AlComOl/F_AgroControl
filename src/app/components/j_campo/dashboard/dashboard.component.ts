import { Component,OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import { TareasComponent } from "./tareas/tareas.component";





@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [TareasComponent],
  providers:[]
})

export class DashboardComponent implements OnInit {

  public chart:Chart;

  ngOnInit(): void{

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
        label: 'My First Dataset',
        data: [200, 150, 100,50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(104, 78, 18)',
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

