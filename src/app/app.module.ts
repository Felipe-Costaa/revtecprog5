import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PhotosComponent } from './photos/photos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PublicacoesComponent,
    ComentariosComponent,
    PhotosComponent,
    UsuariosComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
