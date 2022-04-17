import { AlunosService } from './../../alunos.service';
import { Aluno } from './../aluno';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos: Aluno[] = [];
  alunoSelecionado: Aluno;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private router: Router,
    private service: AlunosService
  ) { }

  ngOnInit(): void {
    this.service.litarAlunos()
      .subscribe(response => this.alunos = response);
  }

  cadastrarNovo(){
    this.router.navigate(['/alunos-form'])
  }

  voltarListaAlunos(){
    this.router.navigate(['/alunos-lista'])
  }

  preparaDelecao(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  deletarAluno(){
    this.service
      .deletaAlunoByid(this.alunoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = "Aluno deletado com sucesso!"
          this.ngOnInit();
        },
        erro => this.mensagemErro = "Ocorreu um erro ao deletar o Aluno"
      )
  }

}
