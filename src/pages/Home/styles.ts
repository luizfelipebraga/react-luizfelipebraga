import styled from 'styled-components';

export const HomeSection = styled.section`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  padding: 0 1rem;


  >img {
    height: 15rem;
  }

  @media(max-width:1400px) {
    >img {
      display: none;
    }
  }
`;

export const AsideTitle = styled.aside`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  align-items: left;

  z-index: 5;


  span {
    display: flex;
    font-size: .8rem;
    color: #fff;

    &:first-child {
      color: #ffb464;
      font-weight: 600;
      font-size: 1.5rem;
      width: 100%;
      max-width: 540px;
      text-align: left;


    @media (max-width:1400px) {
        font-size: 1.1rem;
      }

      @media (max-width:690px) {
        display: none;
      }
    }

    &:nth-child(2), &:nth-child(3) {
      font-size: clamp(40px, 8vw, 80px);
      text-transform: capitalize;
      font-weight: bold;
    }

    &:nth-child(3) {
      font-size: clamp(40px, 8vw, 60px);
      color: #b09c88;
    }
    
  }

  p {
      color: #949494;
      font-size: 1rem;
      max-width: 540px;
      line-height: 25px;
      align-items: right;

      b {
        color: #ffb464;
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
