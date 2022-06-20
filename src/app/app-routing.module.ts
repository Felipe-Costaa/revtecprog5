import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PhotosComponent } from './photos/photos.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: PublicacoesComponent},
  {path: 'publicacoes', component: PublicacoesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'comentarios', component: ComentariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
