import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { publicacoes } from './publicacoes';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

private urlAPI = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }


  getPublicacoes() : Observable<publicacoes[]>{
    return this.httpClient.get<publicacoes[]>(this.urlAPI)
  }

  getPublicacaoById(postId: number) :Observable<publicacoes>{
    console.log(this.httpClient.get<publicacoes>(this.urlAPI + '/' + postId))
    return this.httpClient.get<publicacoes>(this.urlAPI + '/' + postId)
  }

  deletePublicacao(postId: number){
    this.httpClient.delete(this.urlAPI + '/post' + postId)
  }

}
