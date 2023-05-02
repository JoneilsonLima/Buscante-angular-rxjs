import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca!: string;
  subscription: Subscription;

  constructor(private livroService: LivroService) { }

  buscarLivros()  {
    this.subscription = this.livroService.buscar(this.campoBusca).subscribe({
      next: retornoAPI => console.log(),
      error: erro => console.log(erro)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
