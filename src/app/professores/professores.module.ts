import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { FormsModule } from '@angular/forms';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ProfessoresFormComponent,
    ProfessoresListaComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports: [
    ProfessoresFormComponent,
    ProfessoresListaComponent
  ]
})
export class ProfessoresModule { }
