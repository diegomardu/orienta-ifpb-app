import { ProfessoresService } from './../../professores.service';
import { AlunosService } from './../../alunos.service';
import { Professor } from './../../professores/professor';
import { Aluno } from './../../alunos/aluno';
import { CadastroTcc } from '../../cadastro-tcc/cadastroTcc'
import { CadastroTccService } from './../../cadastro-tcc.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tcc-lista',
  templateUrl: './cadastro-tcc-lista.component.html',
  styleUrls: ['./cadastro-tcc-lista.component.css']
})
export class CadastroTccListaComponent implements OnInit {

  cadastro: CadastroTcc[] = [];
  alunos: Aluno[] = [];
  professores: Professor[] = [];

  constructor(
    private router: Router,
    private service: CadastroTccService,
    private alunoService: AlunosService,
    private professorService: ProfessoresService
  ) { }

  ngOnInit(): void {

    this.alunoService
      .litarAlunos()
      .subscribe( response => this.alunos = response );

    this.professorService
      .litarProfessores()
      .subscribe( response => this.professores = response);

    this.service
      .listarTrabalhosCadastrado()
      .subscribe(response => this.cadastro = response);
      console.log(this.cadastro)
  }

  cadastrarNovo(){
    this.router.navigate(['/cadastro-tcc-form'])
  }

}
