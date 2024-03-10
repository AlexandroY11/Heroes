import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FotosHeroesComponent } from './componentes/fotos-heroes/fotos-heroes.component';
import { FotosHeroeComponent } from './componentes/fotos-heroe/fotos-heroe.component';

export const routes: Routes = [
    { path: 'hogar', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'galeria', component: FotosHeroesComponent},
    { path: 'fotos/:id', component: FotosHeroeComponent},
    { path: 'buscar/:termino', component: BuscadorComponent},
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
