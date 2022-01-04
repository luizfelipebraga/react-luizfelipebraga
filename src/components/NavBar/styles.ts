import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

interface INavProps {
  navScroll: boolean;
  isOpen: boolean;
}

export const Nav = styled.nav<INavProps>`
  display: flex;
  align-items: ${(props) => (props.isOpen ? "none" : "center")};
  justify-content: space-between;
  width: 100%;

  transition: all 0.5s ease-in-out;

  background: #121111;

  position: fixed;
  z-index: 5555;

  font-size: ${(props) => props.navScroll && !props.isOpen ? ".8rem" : "1rem"};

  padding: 0.3rem 2rem;

  img {
    display: ${(props) => (props.isOpen ? "none" : "flex")};
    height: 4rem;
    width: 4rem;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(50deg);
    }
  }

  ul {
    display: flex;
    align-items: center;
    position: relative;
    gap: 3rem;

    a {
      display: flex;
      gap: 0.5rem;
      color: #f2f2f2;
      font-size: ${(props) => (!props.isOpen ? ".9rem" : "1.5rem")};

      transition: all 0.2s ease-in-out;

      span {
        color: #f9a251;
      }

      &:hover {
        color: #f9a251;
      }
    }
  }

  @media (max-width: 1280px) {
    padding: 0;

    ul {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      height: 100%;
      margin: 0 auto;
      justify-content: space-evenly;
      flex-direction: column;
      height: ${(props) => (props.isOpen ? "100vh" : "0")};
      width: ${(props) => (props.isOpen ? "100vw" : "0")};

      padding: 2rem 0;

      transition: all 0.3s ease-in;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transition: all .3s ease-in-out !important;

  @media (max-width: 1280px) {
    width: 100%;
    z-index: 1000;
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  display: none;
  fill: #ffb464;
  height: 3rem;
  cursor: pointer;

  @media (max-width: 1280px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
    size: 20px;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  fill: #ffb464;
  height: 1.5rem;

  @media (max-width: 1280px) {
    display: block;
    height: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    cursor: pointer;

    svg {
      height: 2rem;
    }
  }
`;

export const BoxCvButtons = styled.div`
  display: inline-flex;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const ResumeButton = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7rem !important;
  margin-right: 1rem;

  font-weight: bold;
  color: #fff;

  padding: 15px 20px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
    color: #fff !important;
    &:before {
      background: #f55f19;
      width: 100%;
    }
  }

  &:before {
    width: 0;
    height: 100%;

    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: -1;
    transition: 0.7s ease;
  }
`;
