import React, { FC } from 'react';

import StyledRoundedImage from './Styles';

import { RoundedImageProps } from './types';

const RoundedImage: FC<RoundedImageProps> = (props) => (<StyledRoundedImage {...props} />);

export default RoundedImage;
