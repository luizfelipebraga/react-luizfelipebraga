import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 50px;
  right: auto;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li a {
    padding: 15px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.5s ease-in-out;

    svg {
      fill: #fff;
      height: 1.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        fill: #f9a251;
        transform: translateY(-3px);
      }
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background-color: #fff;
  }

`;