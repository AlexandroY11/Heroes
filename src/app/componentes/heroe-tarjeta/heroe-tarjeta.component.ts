import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  standalone: true,
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  // @Input() heroe: any={}; 
  @Input() heroe!: heroe;

  constructor(private router: Router) {
  }

  verHeroe(id:number){
    this.router.navigate(['/heroe', id]);
  }

  verFotosHeroe(id:number) {
    this.router.navigate(['/fotos', id]);
  }

}
