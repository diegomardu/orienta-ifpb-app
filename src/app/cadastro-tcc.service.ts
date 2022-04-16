import { Observable } from 'rxjs';
import { CadastroTcc } from './cadastro-tcc/cadastroTcc';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroTccService {

  apiUrl: string = environment.apiUrlBase + '/api/cadastro-tcc';

  constructor(private http: HttpClient) { }

  salvar(cadastro: CadastroTcc): Observable<CadastroTcc>{
    return this.http.post<CadastroTcc>(`${this.apiUrl}`,cadastro);
  }

  listarTrabalhosCadastrado(): Observable<CadastroTcc[]>{
    return this.http.get<CadastroTcc[]>(`${this.apiUrl + '/lista'}`)
  }
}
