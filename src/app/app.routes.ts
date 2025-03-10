import { Routes } from '@angular/router';
import { DashboardComponent } from './components/j_campo/dashboard/dashboard.component';
import { NotificacionesComponent } from './components/j_campo/notificaciones/notificaciones.component';
import { CalendarioComponent } from './components/j_campo/calendario/calendario.component';
import { MenuComponent } from './components/j_campo/menu/menu.component';
import { ModalCrearParcelaComponent } from './components/j_campo/modals/modal-crear-parcela/modal-crear-parcela.component';
import { ModalCrearTratamientoComponent } from './components/j_campo/modals/modal-crear-tratamiento/modal-crear-tratamiento.component';
import { ModalCrearTareaComponent} from './components/j_campo/modals/modal-crear-tarea/modal-crear-tarea.component';
import { CrearOrdenComponent} from './components/j_campo/modals/crear orden/crear-orden.component';
import { TipoPersonalComponent } from './components/j_campo/incidencias/tipos/tipo-personal/tipo-personal.component';
import { TipoMaquinaComponent } from './components/j_campo/incidencias/tipos/tipo-maquina/tipo-maquina.component';
import { TipoStockComponent } from './components/j_campo/incidencias/tipos/tipo-stock/tipo-stock.component';
import { OrdenEnCursoComponent } from './components/j_campo/orden/orden-curso/orden-en-curso.component';
import { OrdenPausadasComponent } from './components/j_campo/orden/orden-pausadas/orden-pausadas.component';
import { OrdenPendientesComponent } from './components/j_campo/orden/orden-pendientes/orden-pendientes.component';
import { OrdenTerminadasComponent } from './components/j_campo/orden/orden-terminadas/orden-terminadas.component';

import { OrdenNoFinalizadaComponent } from './components/aplicador/orden/orden-no-finalizada/orden-no-finalizada.component';
import { OrdenFinalizadaComponent } from './components/aplicador/orden/orden-finalizada/orden-finalizada.component';
import { CrearIncidenciaComponent } from './components/aplicador/incidencias/crear-incidencia/crear-incidencia.component';
import { CrearIncidenciaMaquinaComponent } from './components/aplicador/incidencias/crear-incidencia/crear-incidencia-maquina/crear-incidencia-maquina.component';
import { QuimicosComponent } from './components/aplicador/quimicos/quimicos.component';
import { PedidoComponent } from './components/aplicador/pedido/pedido.component';
import { AuthGuard } from './guards/auth.guard';
import { JefeGuard } from './guards/guard-jefe.guards';
import { AplicadorGuard } from './guards/guard-aplicador.guards';
import { LoginComponent } from './components/login/login.component'
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


export const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [

          { path: 'j_campo/dashboard', component: DashboardComponent },
          { path: 'j_campo/notificaciones', component: NotificacionesComponent },
          { path: 'j_campo/calendario', component: CalendarioComponent },
          { path: 'j_campo/menu', component: MenuComponent },
          { path: 'j_campo/crear-orden', component: CrearOrdenComponent },
          { path: 'j_campo/modal-crear-parcela', component: ModalCrearParcelaComponent },
          { path: 'j_campo/modal-crear-tratamiento', component: ModalCrearTratamientoComponent },
          { path: 'j_campo/modal-crear-tarea', component: ModalCrearTareaComponent },
          {
            path: 'j_campo/incidencias',
            children: [
              { path: 'tipo-personal', component: TipoPersonalComponent },
              { path: 'tipo-maquina', component: TipoMaquinaComponent },
              { path: 'tipo-stock', component: TipoStockComponent }
            ]
          },

          {
            path: 'j_campo/orden',
            children: [
              { path: 'orden-curso', component: OrdenEnCursoComponent },
              { path: 'orden-pausadas', component: OrdenPausadasComponent },
              { path: 'orden-pendientes', component: OrdenPendientesComponent },
              { path: 'orden-terminadas', component: OrdenTerminadasComponent }
            ]
          }
        ],

      },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]




export class AppRoutingModule {}
