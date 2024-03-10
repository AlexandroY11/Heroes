// Dentro de fotos-tarjeta.component.ts
import { Component, Input } from '@angular/core';
import { fotosHeroe } from '../../interfaces/fotos-heroe';

@Component({
  selector: 'app-fotos-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './fotos-tarjeta.component.html',
  styleUrls: ['./fotos-tarjeta.component.css']
})
export class FotosTarjetaComponent {
  @Input() foto: fotosHeroe = { id: 0, idHeroe: 0, nombreHeroe: '', url: '' };
}
