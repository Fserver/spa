import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'app/services/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})

export class BuscadorComponent implements OnInit {

  heroes: any[] = []
  termino: string = ""

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private ruta: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes);
    })
  }

  // redireccionamiento mediante codigo
  verHeroe(idx: number) {
    this.ruta.navigate(['/heroe', idx])
  }

}
