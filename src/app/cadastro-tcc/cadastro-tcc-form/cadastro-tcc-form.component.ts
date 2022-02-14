import { Professor } from './../../professores/professor';
import { Aluno } from './../../alunos/aluno';
import { Component, OnInit } from '@angular/core';
import { AlunosService  } from '../../alunos.service'
import { ProfessoresService } from 'src/app/professores.service';

@Component({
  selector: 'app-cadastro-tcc-form',
  templateUrl: './cadastro-tcc-form.component.html',
  styleUrls: ['./cadastro-tcc-form.component.css']
})
export class CadastroTccFormComponent implements OnInit {

  alunos: Aluno[] =[];
  professores: Professor[] = [];

  constructor(
    private alunosService: AlunosService,
    private professoresService: ProfessoresService
  ) { }

  ngOnInit(): void {
    this.alunosService
      .litarAlunos()
      .subscribe( response => this.alunos = response );

    this.professoresService
      .litarProfessores()
      .subscribe( response => this.professores = response);
  }

}
