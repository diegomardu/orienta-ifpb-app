import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'agendamento-defesa', component: LayoutComponent, canActivate:[AuthGuard], children:[
    { path:'form', component: AgendamentoFormComponent },
    { path:'form/:id', component: AgendamentoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
