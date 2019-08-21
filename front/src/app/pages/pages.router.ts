import { SolicitudComponent } from './solicitud/solicitud.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'solicitud', component: SolicitudComponent },
            { path: 'consulta', component: ConsultaComponent },
            { path: 'auditoria', component: AuditoriaComponent },
        ]
    }
];