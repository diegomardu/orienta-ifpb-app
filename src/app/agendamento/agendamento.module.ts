import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';


@NgModule({
  declarations: [
    AgendamentoFormComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule
  ]
})
export class AgendamentoModule { }
