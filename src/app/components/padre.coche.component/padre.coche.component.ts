import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-padre-coche',
  standalone: false,
  templateUrl: './padre.coche.component.html',
  styleUrl: './padre.coche.component.css',
})
export class PadreCocheComponent {
  public coches: Array<Coche>;

  constructor(){
    this.coches = new Array<Coche>;
    this.coches = [
      new Coche("BMW", "E46", 350, 120, false),
      new Coche("Mercedes", "Clase A", 300, 100, false),
      new Coche("Audi", "A3", 275, 95, false),
      new Coche("Audi", "A6", 320, 120, false),
    ]
  }


}
