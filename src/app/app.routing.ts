import { Listaproductos } from "./components/listaproductos/listaproductos";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PadreCocheComponent } from "./components/padre.coche.component/padre.coche.component";
import { PadreDeportesComponent } from "./components/padre.deportes.component/padre.deportes.component";


const appRoutes: Routes = [
    {path: "", component: Listaproductos},
    {path: "coches", component:PadreCocheComponent},
    {path: "deportes", component: PadreDeportesComponent}
]

export const appRoutingProvider: any[] = []

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);