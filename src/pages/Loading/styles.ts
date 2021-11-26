import styled from 'styled-components';

export const Container = styled.section`
  background-image: linear-gradient(91.18deg,#0d0d0e 32.63%,#141416 62.22%);
  
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export const Img = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;