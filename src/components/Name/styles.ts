import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 50px;
  z-index: 10;  

  @media (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-height: 768px) and (max-width: 800px) {
    display: none;
  }

  @media screen and (max-height: 1024px) and (max-width: 1200px) {
    display: none
  }
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

    @media(max-width: 768px) {
      writing-mode: horizontal-tb;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background: #fff;

    @media(max-width: 768px) {
      width: 0px;
    }
  }
`;