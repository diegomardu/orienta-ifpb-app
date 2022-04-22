import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  concluidos: string = '8';
  andamento: string = '4';
  trancado: string = '3';

  constructor() { }

  ngOnInit(): void {
  }

}
