import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessoresService } from 'src/app/professores.service';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent implements OnInit {

  professor: Professor;
  success: boolean = false;
  errors: string[];
  id: number;


  constructor(
    private service: ProfessoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.professor = new Professor();
  }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
        .buscarProfessorPorId(this.id)
        .subscribe( response => this.professor = response,
          errorResponse => this.professor = new Professor()
        )
    }
  }

  voltarListaProfessores(){
    this.router.navigate(['/professores/lista'])
  }

  onSubmit(){
    if(this.id){

      console.log(this.professor)
      this.service.atualizar(this.professor)
        .subscribe( response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar professor']
        }
        )

    }else{
    this.service
      .salvar(this.professor)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.professor = response;
      }, errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
       )
    }
  }

}
