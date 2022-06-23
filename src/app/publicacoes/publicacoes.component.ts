import { Component, OnInit } from '@angular/core';
import { publicacoes } from './publicacoes';
import { PublicacoesService } from './publicacoes.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  listaPublicacoes: publicacoes[] = []
  Publicacao: publicacoes = {} as publicacoes
  postId: number = 0


  constructor(private service: PublicacoesService) { }

  ngOnInit(): void {
    this.service.getPublicacoes().subscribe(itens => 
      this.listaPublicacoes = itens
      )
  }

  unicaPublicacao(){
    this.service.getPublicacaoById(this.postId).subscribe(item =>
      this.Publicacao = item)
  }

  removePublicacao(){
    this.service.deletePublicacao(this.postId)
    alert("Post " + this.postId + " removido com sucesso!")
  }
}
