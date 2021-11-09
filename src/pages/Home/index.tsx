import {
  HomeSection,
  Container,
  AsideTitle,
  GithubButton,
  BoxGithubButton,
} from './styles';

import RuivoProgramando from '../../svgs/hello-ruivo.svg';

import { WaveBottom } from '../../components/Waves/wavebottom';

export function HomePage() {
  return (
    <HomeSection>
      
      <Container>
        <img src={RuivoProgramando} alt="Imagem de uma pessoa programando" />

        <AsideTitle>
          <span>Hello, my name is</span>
          <span>Luiz Felipe Braga</span>
          <p>I’m a Full-Stack Developer Jr specializing in building exceptional digital experiences.
            Currently, I’m focused on building <b>ReactJs w/ TypeScript</b> and <b>NodeJs</b> applications.</p>

          <BoxGithubButton>
            <GithubButton href="/projects">Check out my projects!</GithubButton>
          </BoxGithubButton>
        </AsideTitle>

      </Container>
      <WaveBottom />
    </HomeSection>
  )
}
