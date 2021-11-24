import {
  HomeSection,
  Container,
  AsideTitle,
} from './styles';

import RuivoProgramando from '../../svgs/hello-animated.svg';

import { ProjectButtonComponent } from '../../components/Buttons/Project';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

export function HomePage() {
  const container = useRef(null)

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: ''
      
  //   })
  // },[])

  return (
    <HomeSection id="home">
      <Container ref={container}>
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
