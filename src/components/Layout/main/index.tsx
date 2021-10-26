import { NavBar } from "../../NavBar"
import { SocialMediaSideBar } from "../../SocialMedias";
import { Container } from "./styles"
import { Content } from './styles';

export const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <SocialMediaSideBar/>

      <Content>
        {children}
      </Content>

    </Container>
  )
}
