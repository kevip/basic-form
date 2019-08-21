import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: 'bcp-form', loadChildren: './pages/pages.module#PagesModule'},
    { path: 'not-found', component: NotFoundComponent},
    // { path: '', pathMatch: 'full', redirectTo: 'not-found' },
    { path: '**', redirectTo: 'not-found'},
];