import {
  HomePageSection,
  Container,
  AsideTitle,
  GithubButton,
  BoxGithubButton,
  BoxSocialMedias,
  SocialMedia,
} from './styles';

import GithubLogo from '../../svgs/github2.svg';
import LinkedinLogo from '../../svgs/linkedin-white.svg';
import GmailLogo from '../../svgs/logo-gmail.svg';
import RuivoProgramando from '../../svgs/hello-ruivo.svg';

import { WaveBottom } from '../../components/Waves/wavebottom';

export function HomePage() {
  return (
    <HomePageSection>

      {/* <WaveTop /> */}

      <Container>
        <img src={RuivoProgramando} alt="Imagem de uma pessoa programando" />

        <AsideTitle>
          <span>Hello World,</span>
          <span>I&apos;m  Luiz Felipe</span>
          <p>I’m a software engineer specializing in building
            (and occasionally designing) exceptional digital experiences.
            Currently, I’m focused on building <b>ReactJs</b> and <b>NodeJs</b> applications.</p>

          <BoxSocialMedias>
            <SocialMedia href="https://github.com/luizfelipebraga" target="_blank">
              <img src={GithubLogo} alt="Logo do Github" />
            </SocialMedia>

            <SocialMedia href="https://www.linkedin.com/in/luizfelipe-braga/" target="_blank">
              <img src={LinkedinLogo} alt="Logo do Linkedin" />
            </SocialMedia>

            <SocialMedia href="mailto:luizfelipebragaa@gmail.com" target="_blank">
              <img src={GmailLogo} alt="Logo de Email" />
            </SocialMedia>
          </BoxSocialMedias>

          <BoxGithubButton>
            <GithubButton href="https://github.com/luizfelipebraga" target="_blank">Check out my Github</GithubButton>
          </BoxGithubButton>

        </AsideTitle>
      </Container>



      <WaveBottom />
    </HomePageSection>
  )
}
