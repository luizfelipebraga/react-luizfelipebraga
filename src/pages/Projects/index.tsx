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
          content="Projeto de Perguntas e Respostas similar ao Brainly, com intuito de aprender um pouco mais sobre ContextAPI e StyledComponents."
          url="https://github.com/luizfelipebraga/react-letmeask-nlw"
        >
          <span>ReactJs</span>
          <span>TypeScript</span>
          <span>Firebase</span>
        </Card>

        <Card
          title="LetMeAsk"
          content="Projeto de Perguntas e Respostas similar ao Brainly"
          url="https://github.com/luizfelipebraga/react-letmeask-nlw">
          <span>Github</span>
        </Card>

      </GridProjects>
    </Container>
  )
}
