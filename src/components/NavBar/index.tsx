import { Link } from "react-router-dom";
import { Container, Nav, ScrollDown, ScrollUp } from "./styles"
import LogoImg from '../../images/orangeCircle.png';

export const NavBar = () => {

  return (
    <Container>
      <Nav>
        <Link to="/"><img src={LogoImg} alt="Logo" /></Link>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/github" target="_blank" rel="noopener noreferrer">Github</Link>
          <Link to="/contact">Contato</Link>
        </ul>
      </Nav>

    </Container>
  )
}
