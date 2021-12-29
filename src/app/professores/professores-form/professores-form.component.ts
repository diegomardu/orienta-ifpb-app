import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent implements OnInit {

  professor: Professor;
  success: boolean;
  error:boolean;


  constructor() {
    this.professor = new Professor();
  }

  ngOnInit(): void {
  }

  clicar(){
    console.log(this.professor)
  }

}
