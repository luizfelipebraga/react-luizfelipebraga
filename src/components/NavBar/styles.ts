import styled from 'styled-components';

interface INavProps {
  navScroll: boolean;
}

export const Nav = styled.nav<INavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.5s ease-in-out;

  background: ${(props) => props.navScroll ? '#121111' : 'transparent'};

  position: fixed;
  z-index: 1;

  padding: ${(props) => props.navScroll ? '1rem 2rem' : '1rem 1rem'};

  img {
    height: 5rem;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(50deg)
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    transition: all 0.5s ease-in-out;

    a {
      display: flex;
      gap: .5rem;
      color: #f2f2f2;
      font-size: 1.1rem;
      transition: all 0.2s ease-in-out;

      span {
        color: #f9a251;
      }

      &:hover {
        color: #f9a251;
      }
    }
  }

  @media(max-width: 1030px) {
    
  }
`;

export const BoxCvButtons = styled.div`
  display: inline-flex;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
`;

export const ResumeButton = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-size: .8rem !important;
    margin-right: 1rem;

    overflow: hidden;
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

