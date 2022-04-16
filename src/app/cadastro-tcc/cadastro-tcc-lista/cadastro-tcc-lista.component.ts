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

  constructor(
    private router: Router,
    private service: CadastroTccService
  ) { }

  ngOnInit(): void {
    this.service
      .listarTrabalhosCadastrado()
      .subscribe(response => this.cadastro = response);
      console.log(this.cadastro)
  }

  cadastrarNovo(){
    this.router.navigate(['/cadastro-tcc-form'])
  }

}
