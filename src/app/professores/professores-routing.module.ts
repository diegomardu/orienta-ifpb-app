import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';

const routes: Routes = [
  { path: 'professores-form', component: ProfessoresFormComponent},
  { path: 'professores-lista', component: ProfessoresListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
