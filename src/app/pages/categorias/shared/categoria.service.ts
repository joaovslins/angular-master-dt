import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { categorias } from './categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiPath: string = "http://localhost:8080/api/categoria";

  constructor(private http: HttpClient) { }
  
 getCategorias(): Observable<categorias[]>{
      return this.http.get<categorias[]>(this.apiPath)
 }

 deletarCategoria(id: number){
    return this.http.delete<categorias>(`${this.apiPath}/deletar?id=${id}`)
 }

 getCategoriaById(id: number){
   return this.http.get<categorias>(`${this.http}/categoria?id=${id}`)
 }

 postCategory(categoria: categorias): Observable<categorias>{
   return this.http.post<categorias>(this.apiPath, categoria)
 }

 putCategory(categoria: categorias): Observable<categorias>{
   return this.http.put<categorias>(this.apiPath, categoria)
 }
}
