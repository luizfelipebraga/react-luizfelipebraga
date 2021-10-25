import { Footer } from "../../Footer"
import { NavBar } from "../../NavBar"
import { Container } from "./styles"
import { Content } from './styles';

export const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBar />

      <Content>
        {children}
      </Content>

      {/* <Footer /> */}
    </Container>
  )
}
