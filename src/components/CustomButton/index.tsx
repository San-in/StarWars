import React, {JSX} from 'react';
import {FlexAlignType, Pressable, Text, View} from 'react-native';
import {styles} from './styles.ts';
interface Props {
  onPress: () => void;
  text: string;
  alingSelf?: 'auto' | FlexAlignType | undefined;
  icon?: JSX.Element;
}
export const CustomButton = ({
  onPress,
  alingSelf = 'auto',
  icon,
  text,
}: Props) => {
  return (
    <View style={[styles.button, {alignSelf: alingSelf}]}>
      <Pressable onPress={onPress} style={styles.content}>
        {icon && icon}
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};
