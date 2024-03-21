
import { Routes } from '@angular/router';
import { DeportesComponent } from './components/deportes/deportes.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'deportes', component: DeportesComponent},
];
