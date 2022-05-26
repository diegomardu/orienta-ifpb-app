import { CadastroAtaService } from './../../cadastro-ata.service';
import { Ata } from './../ata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-ata-lista',
  templateUrl: './cadastro-ata-lista.component.html',
  styleUrls: ['./cadastro-ata-lista.component.css']
})
export class CadastroAtaListaComponent implements OnInit {

  ata: Ata[] = [];

  constructor(
    private service : CadastroAtaService
  ) { }

  ngOnInit(): void {
    this.listarAtaCadastrado()
  }

  listarAtaCadastrado(){
    this.service.listarAtaCadastrado()
      .subscribe(response => this.ata = response)
  }

}
