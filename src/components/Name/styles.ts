import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 50px;
  z-index: 10;

`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  a {
    margin: 20px auto;
    color: #fff;
    padding: 10px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: #f9a251;
      transform: translateY(-3px);
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background: #fff;
  }
`;