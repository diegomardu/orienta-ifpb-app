import { Aluno } from './../alunos/aluno';
import { Professor } from './../professores/professor';

export class CadastroTcc{
  id: number;
  cargaHoraria: String;
  curso: String;
  periodoLetivo: String;
  status: String;
  tipoCurso: String;
  idProfessor: String;
  idAluno: String;
  orientador: Professor;
  discente: Aluno;
}
