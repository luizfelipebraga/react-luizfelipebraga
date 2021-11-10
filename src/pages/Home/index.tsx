import {
  HomeSection,
  Container,
  AsideTitle,
  GithubButton,
  BoxGithubButton,
} from './styles';

import RuivoProgramando from '../../svgs/hello-ruivo.svg';
import { useEffect } from 'react';

//library
import "aos/dist/aos.css";
import Aos from 'aos';

export function HomePage() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true
    });
  }, [])

  return (
    <HomeSection> 
      <Container>
        <img src={RuivoProgramando} alt="Imagem de uma pessoa programando" />

        <AsideTitle>
          <span>Hello, my name is</span>
          <span>Luiz Felipe Braga</span>
          <p>I’m a Full-Stack Developer Jr specializing in building exceptional digital experiences.
            Currently, I’m focused on building <b>ReactJs</b> and <b>NodeJs</b> applications both using <b>TypeScript</b>.</p>

          <BoxGithubButton>
            <GithubButton href="/projects">Check out my projects!</GithubButton>
          </BoxGithubButton>
        </AsideTitle>  
      </Container>
    </HomeSection>
  )
}
