import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';


@NgModule({
  declarations: [
    AgendamentoFormComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    FormsModule,
    MatDatepickerModule
  ]
})
export class AgendamentoModule { }
