import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { CadastroTccListaComponent } from './cadastro-tcc-lista/cadastro-tcc-lista.component';
import { CadastroTccFormComponent } from './cadastro-tcc-form/cadastro-tcc-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cadastro-tcc', component: LayoutComponent, canActivate:[AuthGuard], children:[
    { path: 'form', component: CadastroTccFormComponent },
    { path: 'form/:id', component: CadastroTccFormComponent},
    { path: 'lista', component: CadastroTccListaComponent },
    { path: '', redirectTo: '/cadastro-tcc/lista', pathMatch:'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroTccRoutingModule { }
