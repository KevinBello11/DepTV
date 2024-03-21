import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { MenuComponent } from '../components/menu/menu.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    DeportesComponent, 
    MenuComponent
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
  providers: [],
  bootstrap: [ContainerModule]
})
export class ContainerModule { }
