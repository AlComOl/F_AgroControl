import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-order-filter',
  imports: [CommonModule,RouterModule],
  templateUrl: './order-filter.component.html',
  styleUrl: './order-filter.component.css'
})


export class OrderFilterComponent {



constructor( private router:Router){

}


  navegateEnCurso(ruta: string) {

    this.router.navigate(['/j_campo/orden/orden-curso']);

}
    isActive(ruta: string): boolean {
      return this.router.url === ruta;
    }

 navegatePendientes(ruta: string){
  this.router.navigate(['/j_campo/orden/orden-pendientes']);
  }

  isActivePe(ruta: string): boolean {
    return this.router.url === ruta;
  }
  navegatePausadas(ruta: string){
    this.router.navigate(['/j_campo/orden/orden-pausadas']);
  }
  isActivePa(ruta: string): boolean {
    return this.router.url === ruta;
  }
  navegateTerminadas(ruta: string){
    this.router.navigate(['/j_campo/orden/orden-terminadas']);
  }

  isActiveTe(ruta: string): boolean {
    return this.router.url === ruta;
  }



}
