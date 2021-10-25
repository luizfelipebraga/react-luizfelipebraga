import styled from 'styled-components';

export const HomePageSection = styled.section`
  height:100%;
  width: 100%;

  position: relative;
`;

export const Container = styled.div`
  width: 100%;

  margin-top: 4rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;

  padding: 100px;

  img {
    height: 15rem;
  }

`;

export const AsideTitle = styled.aside`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1rem;
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

    &:last-child {
      font-size: 1rem;
    }
    
    text-align: center;
    text-transform: uppercase;
  }
`;

export const BoxCvButtons = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`;

export const CvButton = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  margin-right: 1rem;

  overflow: hidden;
  font-weight: 700;
  color: #fff; 

  background-image: linear-gradient(120deg, #d98324 0%, #783f00 100%);

  
  border-radius: 25px;

  padding: 16px 35px;

  position: relative;

  z-index: 1;
  transition: filter 0.2s ease;

  &:hover {
      filter: brightness(0.8);
  }
`;

export const BoxSocialMedias = styled.div`
  width: 100%;
  height: 30%;

  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SocialMedia = styled.a`
  img {
    height: 4.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
