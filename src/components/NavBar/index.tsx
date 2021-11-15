import { HashLink as Link } from "react-router-hash-link";
import { Nav, ResumeButton, BoxCvButtons } from "./styles"
import LogoImg from '../../images/orangeCircle.png';

import PtResume from '../../documents/resume.pdf';
import EngResume from '../../documents/curriculum.pdf';

import { useEffect, useState } from "react";

export const NavBar = () => {

  const [navBar, setNavBar] = useState<boolean>(false);

  function changeBackground() {
    if (window.scrollY > 10) {
      setNavBar(true);
    }
    else {
      setNavBar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [])


  return (
    <Nav navScroll={navBar}>
      <Link to="/"><img src={LogoImg} alt="Logo" /></Link>
      <ul>
        <Link to="#home"><span>01.</span>Home</Link>
        <Link to="#about"><span>02.</span>About</Link>
        <Link to="#projects"><span>03.</span>Projects</Link>
        <Link to="/contact"><span>04.</span>Contact</Link>
        <BoxCvButtons>
          <ResumeButton href={PtResume} target="_blank">Curriculo</ResumeButton>
          <ResumeButton href={EngResume} target="_blank">Resume</ResumeButton>
        </BoxCvButtons>
      </ul>
    </Nav >
  )
}
