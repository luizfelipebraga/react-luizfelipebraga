import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;

  margin: 0 0 100px 0; 
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  gap: 2rem;

  span {
    letter-spacing: .6rem;
    font-size: clamp(1.5rem, 5vw, 2.7rem);
  }

  a {
    span {
      display: inline-block;

      &:after {
        content: '';
        color: #fff;
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }

      &:hover::after {
        width: 100%;
        background: #fff;
      }
      letter-spacing: normal !important;
      font-size: clamp(2rem, 5vw, 4.5rem) !important; 
      color: #fff;
    }
  }
`;