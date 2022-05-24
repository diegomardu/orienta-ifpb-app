import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroTccRoutingModule } from './cadastro-tcc-routing.module';
import { CadastroTccFormComponent } from './cadastro-tcc-form/cadastro-tcc-form.component';
import { CadastroTccListaComponent } from './cadastro-tcc-lista/cadastro-tcc-lista.component';


@NgModule({
  declarations: [
    CadastroTccFormComponent,
    CadastroTccListaComponent,
  ],
  imports: [
    CommonModule,
    CadastroTccRoutingModule,
    FormsModule,
    RouterModule,

  ],
  exports: [
    CadastroTccFormComponent,
    CadastroTccListaComponent
  ]
})
export class CadastroTccModule { }
