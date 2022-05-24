import { Aluno } from './alunos/aluno';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  apiUrl: string = environment.apiUrlBase + '/api/alunos';

  constructor(
    private http: HttpClient
  ) { }

  salvar( aluno: Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(`${this.apiUrl}`,aluno)
  }

  atualizar(aluno: Aluno) : Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${aluno.id}`, aluno);
  }

  listarAlunos(): Observable<Aluno[]>{
    return this.http.get<any>(`${this.apiUrl}`);
  }

  buscarAlunoPorId(id: number): Observable<Aluno>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletaAlunoByid(aluno: Aluno): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${aluno.id}`);
  }
}
