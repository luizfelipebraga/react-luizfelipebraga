import styled from 'styled-components';

export const Container = styled.div`

  @media (max-width: 1024px) {
    display: none;
  }

  span {
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    color: #c5c5c5;
  }

  p {
    margin: 20px 0 0 0;
    max-width: 300px;
  }
`;