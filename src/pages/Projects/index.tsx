import { ProjectButtonComponent } from '../../components/Buttons/Project'
import { Card } from '../../components/Card'
import { SubTitle } from '../../components/SubTitle'

import {
  Container,
  GridProjects,
} from './styles'

export function ProjectsPage() {
  return (
    <Container data-simplebar id="projects">
      <SubTitle number={'03'} title={'Projects'}/>

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
          content="Projeto de introdução ao React Native com GoogleMapApi. O usuário escolhe um local que deseja ir
          mostrando o local de origem depois o veiculo de sua escolha."
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
          acessar a plataforma. FrontEnd - BackEnd - Mobile"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>C#</span>
          <span>SQL Server</span>
        </Card>

        <Card
          title="Busi"
          content="Api simples para entender um pouco mais sobre o mundo da programação funcional com Elixir"
          url="https://github.com/luizfelipebraga/elixir-busi-api">
          <span>Elixir</span>
          <span>Docker</span>
        </Card>

        <Card
          title="Portfolio Vanilla"
          content="Portfolio usando apenas Html, Css e JavaScript vanilla. Sem uso de Frameworks."
          url="https://github.com/luizfelipebraga/luizfelipebraga.github.io"
        >
          <a href="https://github.com/luizfelipebraga/luizfelipebraga.github.io" target="_blank" rel="noreferrer">
            <span>WebSite</span>
          </a>
          <span>Html</span>
          <span>Css</span>
          <span>JavaScript</span>
        </Card>

        <Card
          title="Html and Css Tips"
          content="Repositório em que guardo alguns templates de códigos para usar em futuros projetos."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>Html</span>
          <span>Css</span>
        </Card>

      </GridProjects>

      <ProjectButtonComponent href="https://github.com/luizfelipebraga" target="_blank" rel="noreferrer">See more</ProjectButtonComponent>
    </Container>
  )
}
