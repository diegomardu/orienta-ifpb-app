import { Aluno } from "../alunos/aluno";
import { CadastroTcc } from "../cadastro-tcc/cadastroTcc";
import { Professor } from "../professores/professor";

export class Agendamento{
  id: number;
  periodoLetivo: string;
  data: string
  aluno: Aluno;
  professor: Professor;
  orientacaoTcc: CadastroTcc
  idTcc: number
}
