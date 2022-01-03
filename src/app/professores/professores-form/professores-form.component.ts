import { Router } from '@angular/router';
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


  constructor(
    private service: ProfessoresService,
    private router: Router
    ) {
    this.professor = new Professor();
  }

  ngOnInit(): void {
  }

  voltarListaProfessores(){
    this.router.navigate(['/professores-lista'])
  }

  onSubmit(){
    this.service.salvar(this.professor)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.professor = response;
      } ,errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
