import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAtaRoutingModule } from './cadastro-ata-routing.module';
import { CadastroAtaFormComponent } from './cadastro-ata-form/cadastro-ata-form.component';
import { FormsModule } from '@angular/forms';
import { CadastroAtaListaComponent } from './cadastro-ata-lista/cadastro-ata-lista.component';


@NgModule({
  declarations: [
    CadastroAtaFormComponent,
    CadastroAtaListaComponent
  ],
  imports: [
    CommonModule,
    CadastroAtaRoutingModule,
    FormsModule
  ]
})
export class CadastroAtaModule { }
