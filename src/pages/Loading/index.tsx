import { useEffect } from 'react';
import { useHistory } from 'react-router';
import logo from '../../images/orangeCircle.png'
import {
  Container,
  Img
} from './styles';

export function LoadingPage() {

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/home')
    }, 3000)
  }, [history])

  return (
    <Container>
      <Img src={logo} alt="Logo do Site"/>
    </Container>
  )
}
