import { ProjectButtonComponent } from '../../components/Buttons/Project'
import { Card } from '../../components/Card'
import { SubTitle } from '../../components/SubTitle'

import {
  Container,
  GridProjects,
} from './styles'

export function ProjectsPage() {
  return (
    <Container id="projects">
      <SubTitle number={'03'} title={'Projects'} />

      <GridProjects>
        <Card
          title="Nlw - Let me Ask"
          content="Question and Answer Project similar to Brainly, in order to learn a little more about Context API and Styled Components."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw"
        >
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>Firebase</span>
        </Card>

        <Card
          title="Uber Clone"
          content="GoogleMapApi. The user chooses a location that they want to go showing the place of origin after the vehicle of their choice."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>React Native</span>
          <span>Redux</span>
          <span>Tailwind</span>
          <span>Maps</span>
        </Card>

        <Card
          title="Senai Vagas"
          content="Project completion of course in Senai. 
          System to improve the connection between company and student, which only Senai students could access the plataform. 
          FrontEnd - BackEnd - Mobile"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>C#</span>
          <span>SQL Server</span>
        </Card>

        <Card
          title="Busi"
          content="Simple API to understand a little more about the world of functional programming with Elixir"
          url="https://github.com/luizfelipebraga/elixir-busi-api">
          <span>Elixir</span>
          <span>Docker</span>
        </Card>

        <Card
          title="Portfolio Vanilla"
          content="Portfolio using only Html, Css and Vanilla JavaScript. No use of Frameworks."
          url="https://luizfelipebraga.github.io/"
        >
          <span>Html</span>
          <span>Css</span>
          <span>JavaScript</span>
        </Card>

        <Card
          title="Html and Css Tips"
          content="Repository where I save some code templates to use in future projects."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>Html</span>
          <span>Css</span>
        </Card>
      </GridProjects>

      <ProjectButtonComponent href="https://github.com/luizfelipebraga?tab=repositories" target="_blank" rel="noreferrer">See more projects</ProjectButtonComponent>
    </Container>
  )
}
