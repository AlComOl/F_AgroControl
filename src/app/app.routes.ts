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
import{FooterComponent} from './components/j_campo/footer/footer.component';
import{HeaderComponent} from './components/j_campo/header/header.component';
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
    path: '',
    component: AuthLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }]
  },
  {
    path: 'j_campo',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path:'footer',component:FooterComponent},
          { path:'header',component:HeaderComponent},
          { path: 'notificaciones', component: NotificacionesComponent },
          { path: 'calendario', component: CalendarioComponent },
          { path: 'menu', component: MenuComponent },
          { path: 'crear-orden', component: CrearOrdenComponent },
          { path: 'modal-crear-parcela', component: ModalCrearParcelaComponent },
          { path: 'modal-crear-tratamiento', component: ModalCrearTratamientoComponent },
          { path: 'modal-crear-tarea', component: ModalCrearTareaComponent },
          {
            path: 'incidencias',
            children: [
              { path: 'tipo-personal', component: TipoPersonalComponent },
              { path: 'tipo-maquina', component: TipoMaquinaComponent },
              { path: 'tipo-stock', component: TipoStockComponent }
            ]
          },

          {
            path: 'orden',
            children: [
              { path: 'orden-curso', component: OrdenEnCursoComponent },
              { path: 'orden-pausadas', component: OrdenPausadasComponent },
              { path: 'orden-pendientes', component: OrdenPendientesComponent },
              { path: 'orden-terminadas', component: OrdenTerminadasComponent }
            ]
          }
        ],

      },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]




export class AppRoutingModule {}
