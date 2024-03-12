import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fotosHeroe } from '../../interfaces/fotos-heroe';
import { FotosHeroeService } from '../../services/fotos-heroe.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports:[ NgFor, RouterLink],
  selector: 'app-fotos-heroe',
  templateUrl: './fotos-heroe.component.html',
  styleUrls: ['./fotos-heroe.component.css']
})
export class FotosHeroeComponent implements OnInit {
  idHeroe!: number;
  nombreHeroe!: string;
  url!: string;
  fotos: fotosHeroe[] = [];

  constructor(
    private route: ActivatedRoute,
    private fotosHeroeService: FotosHeroeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idHeroe = +params['id'];
      this.fotos = this.fotosHeroeService.getFotoHeroe(this.idHeroe);
      this.nombreHeroe = this.fotos.length > 0 ? this.fotos[0].nombreHeroe : ''; 
      this.url = this.fotos.length > 0 ? this.fotos[0].url : ''; 
      console.log(this.fotos);
    });
  }
}
