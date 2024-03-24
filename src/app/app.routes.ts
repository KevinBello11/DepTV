
import { Routes } from '@angular/router';
import { DeportesComponent } from './components/deportes/deportes.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'deportes', component: DeportesComponent},
    {path: 'reproductor', component: ReproductorComponent},
];
