import { CadastroTcc } from './../cadastro-tcc/cadastroTcc';
import { CadastroTccService } from './../cadastro-tcc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  concluidos: number = 0;
  andamento: number = 0;
  trancado: number = 0;
  cadastro: CadastroTcc[] = []
  totalElementos = 0;
  pagina = 0;
  tamanho = 5;
  pageSizeOptions: number[] = [5];

  constructor(
    private service : CadastroTccService
    ) { }

  ngOnInit(): void {
    this.service
      .listarTrabalhosCadastrado()
      .subscribe(response => {
        this.cadastro = response
        console.log("Cadastro",this.cadastro)
        for(let cad of this.cadastro){
          if(cad.status == 'Concluido'){
            this.concluidos += 1;
          }else if(cad.status == 'Em andamento'){
            this.andamento += 1;
          }else{
            this.trancado += 1;
          }
        }
      });


  }

}
