import { LayoutComponent } from './../layout/layout.component';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';

const routes: Routes = [
  { path: 'professores', component: LayoutComponent, children:[
    { path: 'form', component: ProfessoresFormComponent},
    { path: 'form/:id', component: ProfessoresFormComponent},
    { path: 'lista', component: ProfessoresListaComponent },
    { path: '', redirectTo:'/professores/lista', pathMatch:'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
