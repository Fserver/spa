import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() index: number = 0

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private ruta: Router) {
    this.heroeSeleccionado = new EventEmitter()
  }

  ngOnInit(): void {
  }

  // redireccionamiento mediante codigo
  verHeroe() {
    // console.log(this.index);
    // this.ruta.navigate(['/heroe', this.index])
    this.heroeSeleccionado.emit(this.index)
  }
}