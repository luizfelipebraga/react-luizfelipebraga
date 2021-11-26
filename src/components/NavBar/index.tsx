import { HashLink as Link } from "react-router-hash-link";
import { Nav, ResumeButton, BoxCvButtons, Hamburger, Menu } from "./styles"
import LogoImg from '../../images/orangeCircle.png';

import PtResume from '../../documents/resume.pdf';
import EngResume from '../../documents/curriculum.pdf';

import { useEffect, useState } from "react";

export const NavBar = () => {

  const [navBar, setNavBar] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  function ScrollToTop(): void {
    window.scrollTo(0, 1);
    setIsOpen(false);
  }

  return (
    <Nav isOpen={isOpen} navScroll={navBar}>
      <Link to="/" onClick={ScrollToTop}>
        <img src={LogoImg} alt="Logo" />
      </Link>


      <Menu>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <ul>
          <Link to="/home" onClick={ScrollToTop}><span>01.</span>Home</Link>
          <Link to="#about" onClick={() => setIsOpen(false)}><span>02.</span>About</Link>
          <Link to="#projects" onClick={() => setIsOpen(false)}><span>03.</span>Projects</Link>
          <Link to="#contact" onClick={() => setIsOpen(false)}><span>04.</span>Contact</Link>
          <BoxCvButtons>
            <ResumeButton href={PtResume} target="_blank">Curriculo</ResumeButton>
            <ResumeButton href={EngResume} target="_blank">Resume</ResumeButton>
          </BoxCvButtons>
        </ul>
      </Menu>
    </Nav >
  )
}
