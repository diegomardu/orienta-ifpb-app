import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { FormsModule } from '@angular/forms';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { MatPaginatorModule } from '@angular/material/paginator'


@NgModule({
  declarations: [
    AlunosFormComponent,
    AlunosListaComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports:[
    AlunosFormComponent,
    AlunosListaComponent
  ]
})
export class AlunosModule { }
