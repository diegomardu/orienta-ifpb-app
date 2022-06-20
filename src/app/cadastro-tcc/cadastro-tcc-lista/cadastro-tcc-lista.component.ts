import { ProfessoresService } from './../../professores.service';
import { AlunosService } from './../../alunos.service';
import { Professor } from './../../professores/professor';
import { Aluno } from './../../alunos/aluno';
import { CadastroTcc } from '../../cadastro-tcc/cadastroTcc'
import { CadastroTccService } from './../../cadastro-tcc.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cadastro-tcc-lista',
  templateUrl: './cadastro-tcc-lista.component.html',
  styleUrls: ['./cadastro-tcc-lista.component.css']
})
export class CadastroTccListaComponent implements OnInit {

  cadastro: CadastroTcc[] = [];
  alunos: Aluno[] = [];
  professores: Professor[] = [];
  totalElementos = 0;
  pagina = 0;
  tamanho = 5;

  constructor(
    private router: Router,
    private service: CadastroTccService,
    private alunoService: AlunosService,
    private professorService: ProfessoresService
  ) { }

  ngOnInit(): void {
    this.listarTccs()
  }

  cadastrarNovo(){
    this.router.navigate(['/cadastro-tcc/form'])
  }

  listarTccs(){
    this.alunoService
      .listarAlunos()
      .subscribe( response => {
        this.alunos = response;
      } );

    this.professorService
      .listarProfessores()
      .subscribe( response => {
        this.professores = response
      } );

    this.service
      .listarTrabalhosCadastrado()
      .subscribe(response => {
        this.cadastro = response
      });
  }

  paginar(event: PageEvent){
    this.pagina = event.pageIndex
    this.listarTccs()
  }

}
