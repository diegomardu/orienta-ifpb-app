import { CadastroTccService } from './../../cadastro-tcc.service';
import { CadastroTcc } from './../cadastroTcc';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  cadastro: CadastroTcc;
  alunos: Aluno[] =[];
  professores: Professor[] = [];
  status: string[] = ["Em andamento", "Concluido","Trancado"]
  tipoCursoOrientacao: string[] = ["Técnico","Graduação","Especialização","Mestrado","Doutorado"]
  success: boolean = false;
  errors: string[];
  id: number;
  totalElementos = 0;
  pagina = 0;
  tamanho = 5;

  constructor(
    private alunosService: AlunosService,
    private professoresService: ProfessoresService,
    private router: Router,
    private service: CadastroTccService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cadastro = new CadastroTcc();
   }

  ngOnInit(): void {
    this.alunosService
      .listarAlunos()
      .subscribe( response => {
        this.alunos = response
      } );

    this.professoresService
    .listarProfessores()
    .subscribe( response => {
      this.professores = response
    } );

    let params : Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
        .buscarTccPorId(this.id)
        .subscribe( response => this.cadastro = response,
          errorResponse => this.cadastro = new CadastroTcc()
        )
    }
  }

  voltarListaOrientacoes(){
    this.router.navigate(['/cadastro-tcc/lista'])
  }

  onSubimit(){
    console.log(this.cadastro)
    if(this.id){
      this.service.atualizar(this.cadastro)
        .subscribe( response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar orientação']
        })
    }else{this.service
      .salvar(this.cadastro)
      .subscribe(response => {
        this.cadastro = response
        this.success = true;
        this.errors = null;
      }, errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.errosr;
      })
    }
  }
}
