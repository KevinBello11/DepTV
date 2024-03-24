import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  selectedChannel: string = '';
  selectedChannelVideoUrl: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedChannel = params['channelName'];
      this.loadVideoForChannel(this.selectedChannel);
    });
  }

  loadVideoForChannel(channelName: string): void {
    // Lógica para cargar el video correspondiente al canal seleccionado
    // Aquí deberías tener un mapeo de nombres de canal a URL de video
    // Por ejemplo:
    switch (channelName) {
      case 'LaLiga':
        this.selectedChannelVideoUrl = 'URL_DEL_VIDEO_PARA_LA_LIGA';
        break;
      case 'DAZN 1':
        this.selectedChannelVideoUrl = 'URL_DEL_VIDEO_PARA_DAZN_1';
        break;
      case 'DAZN 2':
        this.selectedChannelVideoUrl = 'URL_DEL_VIDEO_PARA_DAZN_2';
        break;
      case 'ESPN':
        this.selectedChannelVideoUrl = 'https://clarovideo.derealfama.one/co/espn.php';
        break;
      case 'DAZN 2':
        this.selectedChannelVideoUrl = 'URL_DEL_VIDEO_PARA_DAZN_2';
        break;
      // Agrega más casos según sea necesario para otros canales
      default:
        // En caso de que el canal seleccionado no tenga un video asociado
        this.selectedChannelVideoUrl = '';
    }
  }
}