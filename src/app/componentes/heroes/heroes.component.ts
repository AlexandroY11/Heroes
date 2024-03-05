import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../interfaces/heroe.interface';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroeTarjetaComponent, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:heroe[] = [];

  constructor( private data:HeroesService){
    this.heroes = data.getHeroes();
    console.log(this.heroes)
  }
}
