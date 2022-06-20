import { Params } from '@angular/router';
import { PaginaProfessores } from './professores/paginaProfessores';
import { environment } from './../environments/environment';
import { Professor } from './professores/professor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  listarProfessores(): Observable<Professor[]>{
    return this.http.get<any>(`${this.apiUrl}`);
  }

  buscarProfessorPorId(id: number): Observable<Professor>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletaProfessorByid(professor: Professor): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${professor.id}`);
  }
}
