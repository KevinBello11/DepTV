import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet, 
    CommonModule
  ]
})
export class MenuComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // Definir imágenes para el carrusel
  images = [
    { url: '', alt: 'Imagen 1' },
    // Agrega más imágenes aquí según sea necesario
  ]; 

  // Definir canales agrupados por cadena de TV
  tvChannels = [
    {
      name: 'DAZN',
      channels: [
        { name: 'LaLiga', imageUrl: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jejfa7zjwwah17fk7z2md5t6e_image-header_pEs_1688456206000&quality=70' },
        { name: 'DAZN 1', imageUrl: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jyzsp7ogoq5l13hsu4ioe27t3_image-header_pEs_1661945052000&quality=70' },
        { name: 'DAZN 2', imageUrl: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=1b6gimlr2r5sb1w6yi6rbhu5v6_image-header_pEs_1661946414000&quality=70' }
        // Agrega más canales de DAZN según sea necesario
      ]
    },
    {
      name: 'ESPN',
      channels: [
        { name: 'ESPN', imageUrl: 'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png' },
        { name: 'ESPN 2', imageUrl: 'https://www.chillglobal.com/images/channels/61-espn2-1432805503.jpg' },
        { name: 'ESPN 3', imageUrl: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=1b6gimlr2r5sb1w6yi6rbhu5v6_image-header_pEs_1661946414000&quality=70' }
        // Agrega más canales de DAZN según sea necesario
      ]
    },
    // Puedes agregar más cadenas de TV aquí según sea necesario
  ];

  constructor(private router: Router) {}

  loadVideoForChannel(channel: any): void {
    this.router.navigate(['/player', channel.name]);
  }
}
