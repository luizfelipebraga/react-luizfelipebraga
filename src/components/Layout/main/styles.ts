import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  background-image: linear-gradient(91.18deg, #0d0d0e 32.63%, #141416 62.22%);

`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

    
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0px auto;
  max-width: 1300px;

  @media (max-width: 1400px) {
    max-width: 1000px;
  }
`;