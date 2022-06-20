import { CadastroTcc } from './../../cadastro-tcc/cadastroTcc';
import { CadastroAtaService } from './../../cadastro-ata.service';
import { Ata } from './../ata';
import { Component, OnInit } from '@angular/core';
import { Router, Params , ActivatedRoute} from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-cadastro-ata-form',
  templateUrl: './cadastro-ata-form.component.html',
  styleUrls: ['./cadastro-ata-form.component.css']
})
export class CadastroAtaFormComponent implements OnInit {

  ata: Ata;
  cadastroTcc: CadastroTcc[] = [];
  id: number;

  constructor(
    private router: Router,
    private service : CadastroAtaService,
    private cadastroTccService : CadastroAtaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.ata = new Ata();
   }

  ngOnInit(): void {
    let params: Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.ata.idTcc = params.value.id
    }
  }

  voltarListaTcc(){
    this.router.navigate(['/cadastro-tcc/lista'])
  }
  onSubimit(){
    console.log(this.ata)
    this.service.salvar(this.ata)
      .subscribe( response => this.ata = response)
      this.voltarListaTcc()
  }
}
