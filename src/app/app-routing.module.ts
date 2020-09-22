import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { ClassificacaoComponent } from './classificacao/classificacao.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'classificacao', component: ClassificacaoComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: 'regulamento', component: RegulamentoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
