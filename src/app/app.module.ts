import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { ProfessoresModule } from './professores/professores.module';
import { ProfessoresService } from './professores.service';
import { HttpClientModule } from '@angular/common/http';
import { AlunosModule } from './alunos/alunos.module';
import { CadastroTccModule } from './cadastro-tcc/cadastro-tcc.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ProfessoresModule,
    HttpClientModule,
    AlunosModule,
    CadastroTccModule,
    FormsModule
  ],
  providers: [
    ProfessoresService,
    AlunosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
