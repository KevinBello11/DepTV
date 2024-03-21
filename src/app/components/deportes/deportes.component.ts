import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [],
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css'
})
export class DeportesComponent {
  secciones = [
    {
      imagenUrl: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jejfa7zjwwah17fk7z2md5t6e_image-header_pEs_1688456206000&quality=70',
      titulo: 'DAZN LaLiga',
      descripcion: 'Descripción de la sección 1'
    },
    {
      imagenUrl: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jyzsp7ogoq5l13hsu4ioe27t3_image-header_pEs_1661945052000&quality=70',
      titulo: 'Título de la sección 2',
      descripcion: 'Descripción de la sección 2'
    },
  ]

}
