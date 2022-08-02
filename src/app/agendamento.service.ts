import { Agendamento } from './agendamento/agendamento';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  apiUrl: string = environment.apiUrlBase + '/api/registro_defesa'

  constructor(
    private http : HttpClient
  ) { }

  salvar(agendamento: Agendamento): Observable<Agendamento>{
    return this.http.post<Agendamento>(`${this.apiUrl}`,agendamento);
  }
}


