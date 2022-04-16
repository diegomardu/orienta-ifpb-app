import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tcc-lista',
  templateUrl: './cadastro-tcc-lista.component.html',
  styleUrls: ['./cadastro-tcc-lista.component.css']
})
export class CadastroTccListaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarNovo(){
    this.router.navigate(['/cadastro-tcc-form'])
  }

}
