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

 navegatePendientes(ruta: string){
  this.router.navigate(['/j_campo/orden/orden-pendientes']);
  }
  navegatePausadas(ruta: string){
    this.router.navigate(['/j_campo/orden/orden-pausadas']);
  }
  navegateTerminadas(ruta: string){
    this.router.navigate(['/j_campo/orden/orden-terminadas']);
  }

}
