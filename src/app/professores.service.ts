import { environment } from './../environments/environment';
import { Professor } from './professores/professor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  apiUrl: string = environment.apiUrlBase + '/api/professores';

  constructor(
    private http: HttpClient
  ) { }

  salvar( professor: Professor):Observable<Professor>{
    return this.http.post<Professor>(`${this.apiUrl}`,professor)
  }

  atualizar(professor: Professor) : Observable<Professor>{
    return this.http.put<any>(`${this.apiUrl}/${professor.id}`, professor);
  }

  litarProfessores(): Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.apiUrl}`);
  }

  buscarProfessorPorId(id: number): Observable<Professor>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
