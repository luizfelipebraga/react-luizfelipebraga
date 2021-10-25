import styled from 'styled-components';

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(234% + 1.3px);
    height: 123px;
    transform: rotateY(180deg);
  }
`;

export const ShapeFill = styled.path`
  fill: url(#GradBottom);
`;