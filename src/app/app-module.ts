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

@NgModule({
  declarations: [
    App,
    Listaproductos,
    MenuComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    PadreDeportesComponent,
    HijoDeportesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
