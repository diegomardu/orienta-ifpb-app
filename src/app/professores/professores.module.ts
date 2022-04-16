import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { FormsModule } from '@angular/forms';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';


@NgModule({
  declarations: [
    ProfessoresFormComponent,
    ProfessoresListaComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    FormsModule
  ],
  exports: [
    ProfessoresFormComponent,
    ProfessoresListaComponent
  ]
})
export class ProfessoresModule { }
