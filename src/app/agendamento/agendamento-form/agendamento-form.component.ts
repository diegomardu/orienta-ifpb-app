import { AgendamentoService } from './../../agendamento.service';
import { Agendamento } from './../agendamento';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit {

  agendamento: Agendamento;
  success: boolean = false;
  errors: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AgendamentoService,
    private router: Router
  ) {
    this.agendamento = new Agendamento();
  }

  ngOnInit(): void {
    let params: Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.agendamento.idTcc = params.value.id
    }
    console.log(this.agendamento)
  }

  onSubimit(){
    this.service
      .salvar(this.agendamento)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.agendamento = response;
      }, errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }

  voltarLista(){
    this.router.navigate(['/cadastro-tcc/lista'])
  }





}
