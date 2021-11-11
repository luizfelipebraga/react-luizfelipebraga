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
          title="Nlw - Let me Ask"
          content="Projeto de Perguntas e Respostas similar ao Brainly, 
          com intuito de aprender um pouco mais sobre ContextAPI e StyledComponents."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw"
        >
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>Firebase</span>
        </Card>

        <Card
          title="Uber Clone"
          content="Projeto de conclusão de curso no Senai. 
          Sistema para melhorar o precesso de ligação entre empresa e aluno, em que apenas alunos Senai poderiam
          acessar a plataforma"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>React Native</span>
          <span>Redux</span>
          <span>Tailwind</span>
          <span>Maps</span>
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

        <Card
          title="Busi Api"
          content="Projeto de conclusão de curso no Senai. 
          Sistema para melhorar o precesso de ligação entre empresa e aluno, em que apenas alunos Senai poderiam
          acessar a plataforma"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>Elixir</span>
        </Card>

        <Card
          title="Portfolio Vanilla"
          content="Projeto de Perguntas e Respostas similar ao Brainly, 
          com intuito de aprender um pouco mais sobre ContextAPI e StyledComponents."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw"
        >
          <span>Html</span>
          <span>Css</span>
          <span>JavaScript</span>
        </Card>

        <Card
          title="Html and Css Tips"
          content="Projeto de conclusão de curso no Senai. 
          Sistema para melhorar o precesso de ligação entre empresa e aluno, em que apenas alunos Senai poderiam
          acessar a plataforma"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>Html</span>
          <span>Css</span>
        </Card>

      </GridProjects>
    </Container>
  )
}
