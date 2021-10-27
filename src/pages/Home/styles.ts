import styled from 'styled-components';

export const HomePageSection = styled.section`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;

  padding: 100px;

  >img {
    height: 15rem;
  }

  @media(max-width:1320px) {
    >img {
      display: none;
    }
  }
`;

export const AsideTitle = styled.aside`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  z-index: 5;


  span {
    display: flex;
    font-size: .8rem;
    color: #fff;

    &:first-child {
    background-repeat: repeat;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    letter-spacing: 0.5rem;
    background-image: linear-gradient(91.18deg, #fff 32.63%, #f6a050 62.22%);
    font-size: 2rem;
    }

    &:nth-child(2) {
      font-size: 4rem;
      font-weight: bold;
    }
    
    text-transform: uppercase;
  }

  p {
      color: #949494;
      font-size: 1rem;
      max-width: 540px;
      line-height: 25px;
      align-items: right;

      b {
        color: #ee9a4d;
      }
    }
`;

export const BoxGithubButton = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`;

export const GithubButton = styled.a`
  text-decoration: none;
  font-size: 1rem;
  /* box-shadow: 0 11px 36px 0 rgba(70, 89, 138, 0.25); */
  margin-right: 1rem;

  overflow: hidden;
  font-weight: bold;
  color: #fff;

  padding: 16px 35px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
      color: #fff;
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

export const BoxSocialMedias = styled.div`
  width: 100%;
  height: 5rem;
  position: inherit;

  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SocialMedia = styled.a`
  img {
    width: 3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
