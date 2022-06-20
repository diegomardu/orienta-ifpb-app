import { Ata } from './cadastro-ata/ata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroAtaService {

  apiUrl: string = environment.apiUrlBase + '/api/cadastro-ata'

  constructor(
    private http : HttpClient
  ) { }

  gerarPdf(ata : Ata): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,ata)
  }

  salvar(ata : Ata): Observable<Ata>{
    return this.http.post<Ata>(`${this.apiUrl}`,ata);
  }

  listarAtaCadastrado(): Observable<Ata[]>{
    return this.http.get<Ata[]>(`${this.apiUrl}`)
  }

  buscarTccPorId(id: number): Observable<Ata[]>{
    return this.http.get<Ata[]>(`${this.apiUrl}/${id}`);
  }
}
