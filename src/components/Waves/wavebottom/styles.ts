import styled from 'styled-components';

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  margin-top: 2rem;

  svg {
    position: relative;
    display: block;
    width: calc(234% + 1.3px);
    height: 123px;
    transform: rotateY(180deg);

    @media (max-width: 900px) {
      height: 85px;
    }
  }

  @media (max-width:320px) {
      display: none;
    }
`;

export const ShapeFill = styled.path`
  fill: url(#GradBottom);
`;