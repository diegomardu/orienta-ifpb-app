import { Ata } from './../ata';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-ata-form',
  templateUrl: './cadastro-ata-form.component.html',
  styleUrls: ['./cadastro-ata-form.component.css']
})
export class CadastroAtaFormComponent implements OnInit {

  ata: Ata;

  constructor(
    private router: Router,
  ) {
    this.ata = new Ata();
   }

  ngOnInit(): void {
  }

  voltarListaTcc(){
    this.router.navigate(['/cadastro-tcc/lista'])
  }
  onSubimit(){
    console.log(this.ata)
  }

}
