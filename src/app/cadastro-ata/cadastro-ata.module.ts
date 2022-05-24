import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAtaRoutingModule } from './cadastro-ata-routing.module';
import { CadastroAtaFormComponent } from './cadastro-ata-form/cadastro-ata-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroAtaFormComponent
  ],
  imports: [
    CommonModule,
    CadastroAtaRoutingModule,
    FormsModule
  ]
})
export class CadastroAtaModule { }
