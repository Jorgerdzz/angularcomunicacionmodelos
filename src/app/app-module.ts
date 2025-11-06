import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { MenuComponent } from './components/menu.component/menu.component';
import { appRoutingProvider, routing } from './app.routing';

@NgModule({
  declarations: [
    App,
    Listaproductos,
    MenuComponent
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
