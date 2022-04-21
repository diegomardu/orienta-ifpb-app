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
  loginError: boolean;
  cadastro: boolean;
  mensagemSucesso: string;

  constructor(
    private route: Router,
    private service: AuthService
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

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.email = this.email;

    this.service.salvar(usuario)
      .subscribe(response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso."
        this.loginError = false;
      }, error => {
        this.loginError = true;
        this.mensagemSucesso = null;
      })
  }

}
