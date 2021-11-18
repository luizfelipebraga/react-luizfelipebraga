import styled from 'styled-components';
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export const SimpleBarStyled = styled(SimpleBar) `
  max-height: 100vh;
  overflow: hidden;

  .simplebar-scrollbar:before {
    background: #fff;
  }
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  background-image: linear-gradient(91.18deg, #0d0d0e 32.63%, #141416 62.22%);
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

    
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 100px 0;
  margin: 0px auto;
  max-width: 1300px;

  @media (max-width: 1400px) {
    max-width: 1000px;
  }
`;
