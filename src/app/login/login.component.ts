import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  email: string;
  cadastro: boolean;
  mensagemSucesso: string;
  errors: string[];

  constructor(
    private route: Router,
    private service: AuthService
  ) { }

  onSubmit(){
    this.service
      .tentandoLogar(this.username, this.password)
      .subscribe( response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token',access_token);
        console.log(response)
        this.route.navigate(['/home']);
      }, errosResponse => {
        this.errors = ['Usuário ou senha invalidos']
      })
  }

  preparandoCadastro(event){
    event.preventDefault();
    this.cadastro = true;
  }

  cancelarCadastro(){
    this.cadastro = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.email = this.email;

    this.service.salvar(usuario)
      .subscribe(response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso."
        this.cadastro = false;
        this.username = '';
        this.password = '';
        this.errors = [];
      }, errorResponse => {
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;

      })
  }

}
