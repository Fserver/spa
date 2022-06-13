import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(
    private _heroesService: HeroesService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes()
  }

  // redireccionamiento mediante codigo
  verHeroe(idx: number) {
    this.ruta.navigate(['/heroe', idx])
  }

}
