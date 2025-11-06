import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() seleccionarFavoritoPadre: EventEmitter<any>;
  @Input() idcomic!: number;
  @Output() eliminarComicPadre: EventEmitter<any>;

  constructor(){
    this.seleccionarFavoritoPadre = new EventEmitter;
    this.eliminarComicPadre = new EventEmitter;
  }

  seleccionarFavorito(): void{
    this.seleccionarFavoritoPadre.emit(this.comic);
  }

  eliminarComic(): void{
    this.eliminarComicPadre.emit(this.idcomic)
  }

}
