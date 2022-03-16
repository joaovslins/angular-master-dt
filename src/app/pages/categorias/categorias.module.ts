import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';


@NgModule({
  declarations: [
    ListaCategoriasComponent,
    FormCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
