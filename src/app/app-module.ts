import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { MenuComponent } from './components/menu.component/menu.component';
import { appRoutingProvider, routing } from './app.routing';
import { HijoCocheComponent } from './components/hijo.coche.component/hijo.coche.component';
import { PadreCocheComponent } from './components/padre.coche.component/padre.coche.component';
import { PadreDeportesComponent } from './components/padre.deportes.component/padre.deportes.component';
import { HijoDeportesComponent } from './components/hijo.deportes.component/hijo.deportes.component';
import { ComicsComponent } from './components/comics.component/comics.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { FormsModule } from '@angular/forms';

import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Listaproductos,
    MenuComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    PadreDeportesComponent,
    HijoDeportesComponent,
    ComicsComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceComics,
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
