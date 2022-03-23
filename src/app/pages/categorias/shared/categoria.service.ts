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
}
