import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasModule } from './pages/categorias/categorias.module';

const routes: Routes = [
  {path: 'categorias' , loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
