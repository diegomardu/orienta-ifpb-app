import { Router } from '@angular/router';
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
  status: string[] = ["Em andamento", "Concluido"]
  tipoCurso: string[] = ["Técnico","Graduação","Especialização","Mestrado","Doutorado"]

  constructor(
    private alunosService: AlunosService,
    private professoresService: ProfessoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alunosService
      .litarAlunos()
      .subscribe( response => this.alunos = response );

    this.professoresService
      .litarProfessores()
      .subscribe( response => this.professores = response);
  }

  voltarListaOrientacoes(){
    this.router.navigate(['/cadastro-tcc-lista'])
  }

  onSubmit(){

  }

}
