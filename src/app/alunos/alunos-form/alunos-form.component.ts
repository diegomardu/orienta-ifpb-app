import { Router, Params, ActivatedRoute } from '@angular/router';
import { AlunosService } from './../../alunos.service';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  aluno: Aluno;
  success: boolean = false;
  errors: string[];
  id: number;

  constructor(
    private service: AlunosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.aluno = new Aluno();
   }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
        .buscarAlunoPorId(this.id)
        .subscribe( response => this.aluno = response,
          errorResponse => this.aluno = new Aluno()
        )
    }
  }

  onSubmit(){
    if(this.id){

      this.service.atualizar(this.aluno)
        .subscribe( response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar aluno']
        }
        )

    }else{
    this.service
      .salvar(this.aluno)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.aluno = response;
      }, errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
       )
    }
    }

  voltarListaAlunos(){
    this.router.navigate(['/alunos-lista'])
  }
}


