import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';

const routes: Routes = [
  {path: '', component: ListaCategoriasComponent},
  {path: ':id', component: FormCategoriasComponent},
  {path: ':id/editar', component: FormCategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
