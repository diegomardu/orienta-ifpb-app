import { CadastroTccListaComponent } from './cadastro-tcc-lista/cadastro-tcc-lista.component';
import { CadastroTccFormComponent } from './cadastro-tcc-form/cadastro-tcc-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cadastro-tcc-form', component: CadastroTccFormComponent },
  { path: 'cadastro-tcc-lista', component: CadastroTccListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroTccRoutingModule { }
