import { Card } from '../../components/Card'

import {
  Container,
  GridProjects,
} from './styles'

export function ProjectsPage() {
  return (
    <Container>
      <GridProjects>

        <Card
          title="Nlw Let me Ask"
          content="Projeto de Perguntas e Respostas similar ao Brainly, 
          com intuito de aprender um pouco mais sobre ContextAPI e StyledComponents."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw"
        >
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>Firebase</span>
        </Card>

        <Card
          title="Senai Vagas"
          content="Projeto de conclusão de curso no Senai. 
          Sistema para melhorar o precesso de ligação entre empresa e aluno, em que apenas alunos Senai poderiam
          acessar a plataforma"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>C#</span>
          <span>SQL Server</span>
        </Card>

      </GridProjects>
    </Container>
  )
}
