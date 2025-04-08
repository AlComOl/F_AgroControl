import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-incidencia-filter',
  imports: [CommonModule,RouterModule],
  templateUrl: './incidencia-filter.component.html',
  styleUrl: './incidencia-filter.component.css'
})
export class IncidenciaFilterComponent {

  constructor( private router:Router){

  }


  navegateMaquina(ruta: string) {
    this.router.navigate(['/j_campo/incidencias/tipos/tipo-maquina']);
  }

  isActive(ruta: string): boolean {
    return this.router.url === ruta;
  }

 navegatePersonal(ruta: string){
  this.router.navigate(['/j_campo/incidencias/tipos/tipo-personal']);
  }

  isActivePe(ruta: string): boolean {
    return this.router.url === ruta;
  }


  navegateStock(ruta: string){
    this.router.navigate(['/j_campo/incidencias/tipos/tipo-stock']);
  }

  isActiveSt(ruta: string): boolean {
    return this.router.url === ruta;
  }

}
