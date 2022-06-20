import { CadastroAtaService } from './../../cadastro-ata.service';
import { Ata } from './../ata';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-ata-lista',
  templateUrl: './cadastro-ata-lista.component.html',
  styleUrls: ['./cadastro-ata-lista.component.css']
})
export class CadastroAtaListaComponent implements OnInit {

  ata: Ata[] = [];
  id: number;

  constructor(
    private service : CadastroAtaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.listarAtaCadastrado()
    this.buscarPorId()
  }

  listarAtaCadastrado(){
    this.service.listarAtaCadastrado()
      .subscribe(response => this.ata = response)
  }

  buscarPorId(){
    let params: Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id
      this.service.buscarTccPorId(this.id)
        .subscribe(response => this.ata = response)
    }

  }

  voltarListaTcc(){
    this.router.navigate(['/cadastro-tcc/lista'])
  }

  cadastrarNovaReuniao(){
    this.router.navigate(['cadastro-ata/form'])
  }
}
