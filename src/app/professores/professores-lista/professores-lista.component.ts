import { ProfessoresService } from 'src/app/professores.service';
import { Professor } from './../professor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores-lista',
  templateUrl: './professores-lista.component.html',
  styleUrls: ['./professores-lista.component.css']
})
export class ProfessoresListaComponent implements OnInit {

  professores: Professor[] = [];

  constructor(
    private service: ProfessoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.litarProfessores()
      .subscribe(response => this.professores = response);
  }

  cadastrarNovo(){
    this.router.navigate(['/professores-form'])
  }

  voltarListaProfessores(){
    this.router.navigate(['/professores-lista'])
  }

}
