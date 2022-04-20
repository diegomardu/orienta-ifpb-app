import { LayoutComponent } from './../layout/layout.component';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alunos', component: LayoutComponent, children:[
    { path: 'form', component: AlunosFormComponent },
    { path: 'form/:id', component: AlunosFormComponent },
    { path: 'lista', component: AlunosListaComponent },
    { path: '', redirectTo: '/alunos/lista', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
