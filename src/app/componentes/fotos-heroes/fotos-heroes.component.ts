import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FotosTarjetaComponent } from '../fotos-tarjeta/fotos-tarjeta.component';
import { fotosHeroe } from '../../interfaces/fotos-heroe';
import { FotosHeroeService } from '../../services/fotos-heroe.service';

@Component({
  selector: 'app-fotos-heroes',
  standalone: true,
  imports: [NgFor, FotosTarjetaComponent],
  templateUrl: './fotos-heroes.component.html',
  styleUrl: './fotos-heroes.component.css'
})
export class FotosHeroesComponent {
  fotosHeroes:fotosHeroe[] = [];

  constructor( private data:FotosHeroeService){
    this.fotosHeroes = data.getFotosHeroes();
    console.log(this.fotosHeroes)
  }
}
