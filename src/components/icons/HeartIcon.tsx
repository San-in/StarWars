import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
interface Props {
  isFilled?: boolean;
}
export const HeartIcon = ({isFilled = false}: Props) => (
  <Svg width={24} height={24}>
    {isFilled ? (
      <Path d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z" />
    ) : (
      <Path d="M17.867 3.493 22 6.937v5.127l-10 8.333-10-8.334V6.937l4.133-3.444L12 7.404l5.867-3.911zM18 1l-6 4-6-4-6 5v7l12 10 12-10V6l-6-5z" />
    )}
  </Svg>
);
