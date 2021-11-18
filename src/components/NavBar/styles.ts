import styled from 'styled-components';

interface INavProps {
  navScroll: boolean;
  isOpen: boolean;
}

export const Nav = styled.nav<INavProps>`
  display: flex;
  align-items: ${(props) => (props.isOpen ? "none": "center")};
  justify-content: space-between;
  width: 100%;

  transition: all 0.5s ease-in-out;

  background: ${(props) => (props.navScroll || props.isOpen) ? '#121111' : 'transparent'};
  /* background: #121111; */

  position: fixed;
  z-index: 5555;

  font-size:${(props) => (props.navScroll && !props.isOpen) ? '.8rem' : '1rem'};

  padding: ${({navScroll}) => navScroll ? '.3rem 2rem' : '1rem 2rem' };

  img {
    display: ${(props) => (props.isOpen ? "none": "flex")};
    height: 4rem;
    width: 4rem;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(50deg)
    }
  }

  ul {
    display: flex;
    align-items: center;
    position: relative;
    gap: 3rem;
    transition: all 0.5s ease-in-out;

    a {
      display: flex;
      gap: .5rem;
      color: #f2f2f2;
      font-size:${(props) => (!props.isOpen) ? '.9rem' : '1.5rem'};

      transition: all 0.2s ease-in-out;

      span {
        color: #f9a251;
      }

      &:hover {
        color: #f9a251;
      }
    }
  }

  @media(max-width: 1280px) {
    padding: 0;

    ul {
      display: ${(props) => (props.isOpen ? "flex": "none")};
      height: 100%;
      margin: 0 auto;
      justify-content: space-between;
      flex-direction: column;
      height: ${(props) => (props.isOpen ? "60vh" : "0")};
      width: ${(props) => (props.isOpen ? "100vw" : "0")};

      padding: 2rem 0;
      
      transition: max-height 0.3s ease-in;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    width: 100%;
    z-index: 1000;
  } 
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #ed9b4d;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1280px) {
    display: flex;
    align-items: flex-end;
    padding: 2rem 2rem;
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
    font-size: .7rem !important;
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

