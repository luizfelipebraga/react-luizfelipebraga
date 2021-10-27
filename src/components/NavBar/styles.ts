import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.5s ease-in-out;

  position: fixed;
  z-index: 1;

  padding: 1rem 2rem;

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

export const NavActive = styled.nav `
  background: linear-gradient(90deg, #2b2a4a 0%, #2b2a4a 6%, #75709e 100%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.5s ease-in-out;

  padding: 0 2rem;
  position: fixed;
  z-index: 1;

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
`;

//when scroll down desappear nav
export const ScrollDown = styled.div` 
  Nav {
      transform: translate3d(0, -100%, 0);
  }
`;

//when scroll up appear nav
export const ScrollUp = styled.div`
  Nav {
      filter: drop-shadow(0 -10px 20px rgb(0, 0, 0));
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

