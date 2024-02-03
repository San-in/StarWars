import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../common/colors.ts';
export const LeftArrowIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill={COLORS.white}
    viewBox="0 0 330 330"
    {...props}>
    <Path d="M165 0C74.019 0 0 74.019 0 165s74.019 165 165 165 165-74.019 165-165S255.981 0 165 0zm40.606 234.394c5.858 5.857 5.858 15.355 0 21.213C202.678 258.535 198.839 260 195 260s-7.678-1.464-10.606-4.394l-80-79.998a15 15 0 0 1 0-21.213l80-80.002c5.857-5.858 15.355-5.858 21.213 0 5.858 5.857 5.858 15.355 0 21.213l-69.393 69.396 69.392 69.392z" />
  </Svg>
);
