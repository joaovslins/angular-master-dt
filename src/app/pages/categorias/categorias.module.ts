import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListaCategoriasComponent,
    FormCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    HttpClientModule
  ]
})
export class CategoriasModule { }
