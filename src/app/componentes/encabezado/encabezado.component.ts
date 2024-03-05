import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [
    HomeComponent, 
    AboutComponent, 
    HeroesComponent,
    RouterModule 
  ],
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  
}
