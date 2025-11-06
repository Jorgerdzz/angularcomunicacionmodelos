import { Listaproductos } from "./components/listaproductos/listaproductos";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


const appRoutes: Routes = [
    {path: "", component: Listaproductos},
]

export const appRoutingProvider: any[] = []

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);