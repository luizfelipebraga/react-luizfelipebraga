import styled from 'styled-components';
import LogoImage from '../../images/orangeCircle.png';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(10px);
  
  img {
    height: 5rem;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(50deg)
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  transition: all 0.5s ease-in-out;

  z-index: 5;

  ul {
    display: flex;
    gap: 3rem;
    transition: all 0.5s ease-in-out;

    a {
      color: #f2f2f2;
      font-size: 1.3rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(.8);
      }
    }
  }
`;

//when scroll down desappear nav
export const ScrollDown = styled.div` 
  Nav {
      transform: translate3d(0, -100%, 0);
  }
`;

//when scroll up appear nav
export const ScrollUp = styled.div`
  Nav {
      filter: drop-shadow(0 -10px 20px rgb(0, 0, 0));
  }
`;

