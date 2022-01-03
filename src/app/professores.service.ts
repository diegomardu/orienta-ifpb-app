import { Professor } from './professores/professor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(
    private http: HttpClient
  ) { }

  salvar( professor: Professor):Observable<Professor>{
    return this.http.post<Professor>('http://localhost:8080/api/professores',professor)
  }

  litarProfessores(): Observable<Professor[]>{
    return this.http.get<Professor[]>('http://localhost:8080/api/professores');
  }
}
