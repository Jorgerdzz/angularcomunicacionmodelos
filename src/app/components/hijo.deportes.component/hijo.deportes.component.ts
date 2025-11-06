import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deportes',
  standalone: false,
  templateUrl: './hijo.deportes.component.html',
  styleUrl: './hijo.deportes.component.css',
})
export class HijoDeportesComponent {

  @Input() deporte!: string;

  @Output() seleccionarFavoritoPadre: EventEmitter<any>;

  constructor(){
    this.seleccionarFavoritoPadre = new EventEmitter();
  }

  seleccionarFavoritoHijo(): void{
    this.seleccionarFavoritoPadre.emit(this.deporte);
  }

}
