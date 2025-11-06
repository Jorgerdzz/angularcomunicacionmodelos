import { Component, Input } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  templateUrl: './hijo.coche.component.html',
  styleUrl: './hijo.coche.component.css',
})
export class HijoCocheComponent {
  @Input() coche!: Coche;
  public mensaje: string;

  constructor(){
    this.mensaje = "";
  }

  comprobarEstado(): boolean{
    if(this.coche.estado){
      this.mensaje = "Arrancando!!!"
      return true
    }else{
      this.mensaje = "El coche está apagado";
      this.coche.velocidad = 0;
      return false;
    }
  }

  encenderCoche(): void{
    this.coche.estado = !this.coche.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void{
    if(this.comprobarEstado()){
      this.coche.velocidad += this.coche.aceleracion;
    }else{
      alert("Pero si estoy apagadooo!!!!")
    }
  }

}
