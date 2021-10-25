import {
  HomePageSection,
  Container,
  AsideTitle,
  CvButton,
  BoxCvButtons,
  BoxSocialMedias,
  SocialMedia,
} from './styles';

import GithubLogo from '../../svgs/github2.svg';
import LinkedinLogo from '../../svgs/linkedin-white.svg';
import GmailLogo from '../../svgs/logo-gmail.svg';
import RuivoProgramando from '../../svgs/hello-ruivo.svg';

import PortResume from '../../documents/resume.pdf';
import EngResume from '../../documents/curriculum.pdf';

export function HomePage() {
  return (
    <HomePageSection>
      <Container>
        <img src={RuivoProgramando} alt="Imagem de uma pessoa programando" />

        <AsideTitle>
          <span>Hello World,</span>
          <span>I&apos;m  Luiz Felipe</span>
          <span>Developer / Gamer / Designer</span>

          <BoxCvButtons>
            <CvButton href={PortResume} target="_blank">Currículo</CvButton>
            <CvButton href={EngResume} target="_blank">Curriculum</CvButton>
          </BoxCvButtons>
        </AsideTitle>
      </Container>

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
    </HomePageSection>
  )
}
