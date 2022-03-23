import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../shared/categoria.service';
import { categorias } from '../shared/categorias.model';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  constructor(private service: CategoriaService) { }

  categori!: categorias[]

  ngOnInit(): void {
    this.service.getCategorias().subscribe(

      data => {
        this.categori = data;
        console.log(data);
      },
      error => {
        console.log(error)
        return alert('erro')
      }
    )
  }


  deletarCategoria(id: number){
    const deleteCate = confirm('deseja deletar a categoria')

    if(deleteCate){
      this.service.deletarCategoria(id).subscribe(
        data=>{
          alert('deletado com sucesso')
          window.location.reload()
        },
        error=>{
          console.log(error)
          alert('erro ao deletar')
        }
      )
    }
  }

}
