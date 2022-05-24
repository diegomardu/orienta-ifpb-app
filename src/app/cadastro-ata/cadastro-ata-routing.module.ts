import { AuthGuard } from './../auth.guard';
import { CadastroAtaFormComponent } from './cadastro-ata-form/cadastro-ata-form.component';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cadastro-ata', component: LayoutComponent, canActivate:[AuthGuard], children:[
    { path: 'form/:id', component: CadastroAtaFormComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAtaRoutingModule { }
