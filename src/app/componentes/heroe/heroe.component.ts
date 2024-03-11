import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  heroe:any;

  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService){
    this.activatedRoute.params.subscribe(params=> {
      this.id=params["id"];

      this.heroe= this._heroeService.getHeroe(this.id);

      console.log("DATA", this.id);
    })
  }
}
