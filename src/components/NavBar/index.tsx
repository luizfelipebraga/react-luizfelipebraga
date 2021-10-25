import { Link } from "react-router-dom";
import { Container, Nav, ResumeButton, BoxCvButtons } from "./styles"
import LogoImg from '../../images/orangeCircle.png';

import PtResume from '../../documents/resume.pdf';
import EngResume from '../../documents/curriculum.pdf';

export const NavBar = () => {

  return (
    <Container>
      <Nav>
        <Link to="/"><img src={LogoImg} alt="Logo" /></Link>
        <ul>
          <Link to="/"><span>01.</span>Home</Link>
          <Link to="/projects"><span>02.</span>Projetos</Link>
          <Link to="/github" target="_blank" rel="noopener noreferrer"><span>03.</span>Github</Link>
          <Link to="/contact"><span>04.</span>Contato</Link>
          <BoxCvButtons>
            <ResumeButton href={PtResume} target="_blank">Curriculo</ResumeButton>
            <ResumeButton href={EngResume} target="_blank">Curriculum</ResumeButton>
          </BoxCvButtons>
        </ul>
      </Nav>

    </Container>
  )
}
