import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  listaLivros: [];


  constructor(private livroService: LivroService) { }

  ngOnInit(): void {

  }
}



