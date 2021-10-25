import {
  HomePageSection,
  Container,
  AsideTitle,
  CvButton,
  BoxCvButtons,

} from './styles';

import RuivoProgramando from '../../svgs/hello-ruivo.svg';

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
              <CvButton>Currículo</CvButton>
              <CvButton>Curriculum</CvButton>
            </BoxCvButtons>
          </AsideTitle>

        </Container>
    </HomePageSection>
  )
}
