import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fotosHeroe } from '../../interfaces/fotos-heroe';
import { FotosHeroeService } from '../../services/fotos-heroe.service';
import { FotosTarjetaComponent } from '../fotos-tarjeta/fotos-tarjeta.component';

@Component({
  standalone: true,
  imports: [FotosTarjetaComponent],
  selector: 'app-fotos-heroe',
  templateUrl: './fotos-heroe.component.html',
  styleUrls: ['./fotos-heroe.component.css']
})

export class FotosHeroeComponent implements OnInit {
  fotosHeroes: fotosHeroe[] = [];
  id!: number;
  Nombre?: string;

  constructor(private data: FotosHeroeService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['idHeroe'];
      console.log("DATA", this.id);
      this.fotosHeroes = this.data.getFotoHeroe(this.id);
      console.log(this.fotosHeroes.map(item => item.nombreHeroe));
      if (this.fotosHeroes.length > 0) {
        this.Nombre = this.fotosHeroes[0].nombreHeroe;
      }
    });
  }
}
