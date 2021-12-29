import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessoresFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    FormsModule
  ],
  exports: [
    ProfessoresFormComponent
  ]
})
export class ProfessoresModule { }
