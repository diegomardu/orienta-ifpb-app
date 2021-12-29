import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';


@NgModule({
  declarations: [
    ProfessoresFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule
  ]
})
export class ProfessoresModule { }
