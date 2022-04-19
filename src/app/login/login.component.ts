import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  cadastro: boolean;

  constructor(
    private route: Router
  ) { }

  onSubmit(){
    this.route.navigate(['/home'])
  }

  preparandoCadastro(event){
    event.preventDefault();
    this.cadastro = true;
  }

  cancelarCadastro(){
    this.cadastro = false;
  }

}
