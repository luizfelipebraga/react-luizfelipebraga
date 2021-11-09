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
          title="Supply Delivery"
          content="Plataforma de gerenciamento de produtos"
          url="" />

      </GridProjects>
    </Container>
  )
}
