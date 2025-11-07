import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-comics.component',
  standalone: false,
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
  providers: [ServiceComics]
})
export class ComicsComponent implements OnInit{
  public comics!: Array<Comic>;
  public favorito!: Comic;
  public comic: Comic;

  constructor(private _service: ServiceComics){
    this.comic={
      titulo: "",
      imagen: "",
      descripcion: ""
    }
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  seleccionarFavorito(event: any): void{
    this.favorito = event;
  }

  eliminarComic(event: any): void{
    this.comics.splice(event,1);
  }

  crearComic(): void{
    this.comics.push(this.comic);
  }

}
