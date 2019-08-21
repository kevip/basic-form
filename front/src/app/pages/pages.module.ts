import { NgModule } from "@angular/core";
import { ConsultaComponent } from './consulta/consulta.component';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { routes } from './pages.router';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SolicitudService } from '../shared/services/solicitud/solicitud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ConsultaComponent, 
    AuditoriaComponent, 
    SolicitudComponent,
    NavHeaderComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SolicitudService
  ]
})
export class PagesModule {

}