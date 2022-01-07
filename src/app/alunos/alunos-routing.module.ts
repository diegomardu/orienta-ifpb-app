import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alunos-form', component: AlunosFormComponent },
  { path: 'alunos-form/:id', component: AlunosFormComponent },
  { path: 'alunos-lista', component: AlunosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
