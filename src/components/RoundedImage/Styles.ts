import styled from 'styled-components/macro';
import { RoundedImageProps } from './types';

const StyledRoundedImage = styled.div<RoundedImageProps>`
  height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  border-radius: 50%;
  ${({ width }) => width && `
    width: ${width};
    height: ${width};
  `}
`;

export default StyledRoundedImage;
