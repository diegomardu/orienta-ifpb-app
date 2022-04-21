import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apitUrl: string = environment.apiUrlBase + "/api/usuarios";

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apitUrl, usuario);
  }
}
