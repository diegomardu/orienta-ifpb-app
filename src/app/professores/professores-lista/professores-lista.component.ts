import { ProfessoresService } from 'src/app/professores.service';
import { Professor } from './../professor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-professores-lista',
  templateUrl: './professores-lista.component.html',
  styleUrls: ['./professores-lista.component.css']
})
export class ProfessoresListaComponent implements OnInit {

  professores: Professor[] = [];
  professorSelecionado: Professor;
  mensagemSucesso: String;
  mensagemErro: String;
  totalElementos = 0;
  pagina = 0;
  tamanho = 5;
  pageSizeOptions: number[] = [5];

  constructor(
    private service: ProfessoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaProfessores();
  }

  cadastrarNovo(){
    this.router.navigate(['/professores/form'])
  }

  voltarListaProfessores(){
    this.router.navigate(['/professores/lista'])
  }

  preparaDelecao(professor: Professor){
    this.professorSelecionado = professor;
  }

  deletarProfessor(){
    this.service
      .deletaProfessorByid(this.professorSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = "Professor deletado com sucesso!"
          this.ngOnInit();
        },
        erro => this.mensagemErro = "Ocorreu um erro ao deletar o Professor"
      )
  }

  listaProfessores(){
    this.service.listarProfessores()
      .subscribe(response => {
        this.professores = response
      });
  }

}
