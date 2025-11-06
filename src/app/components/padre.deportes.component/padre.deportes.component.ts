import { Component } from '@angular/core';


@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  templateUrl: './padre.deportes.component.html',
  styleUrl: './padre.deportes.component.css',
})

export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje: string;

  constructor(){
    this.deportes = ['Futbol', 'Baloncesto', 'Tenis', 'Padel'];
    this.mensaje = "";
  }

  seleccionarFavoritoPadre(event: any): void{
    this.mensaje = event
  }

}
