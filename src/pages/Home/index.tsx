import {
  HomeSection,
  Container,
  AsideTitle,
} from './styles';

import RuivoProgramando from '../../svgs/hello-ruivo.svg';
import { useEffect } from 'react';

//library
import "aos/dist/aos.css";
import Aos from 'aos';
import { ProjectButtonComponent } from '../../components/Buttons/Project';

export function HomePage() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true
    });
  }, [])

  return (
    <HomeSection id="home">
      <Container>
        <img src={RuivoProgramando} alt="Imagem de uma pessoa programando" />

        <AsideTitle>
          <span>Hello, my name is</span>
          <span>Luiz Felipe Braga</span>
          <span>FullStack Jr.</span>
          <p>Specializing to become a exceptional web developer.
            Currently, I’m focused on building <b>ReactJs</b> & <b>NodeJs</b> applications using <b>TypeScript</b>.
            Click on the button below to see my knowlegements and projects.</p>

          <ProjectButtonComponent href="#projects">Check out my projects!</ProjectButtonComponent>
        </AsideTitle>
      </Container>
    </HomeSection>

  )
}
