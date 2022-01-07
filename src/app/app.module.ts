import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { ProfessoresModule } from './professores/professores.module';
import { ProfessoresService } from './professores.service';
import { HttpClientModule } from '@angular/common/http';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ProfessoresModule,
    HttpClientModule,
    AlunosModule
  ],
  providers: [
    ProfessoresService,
    AlunosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
