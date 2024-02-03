import React, {JSX} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles.ts';

interface Props {
  label: string;
  value: string;
  isLastRow?: boolean;
}
export const PersonFullInfoRow = ({
  label,
  value,
  isLastRow,
}: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: isLastRow ? 40 : 10,
        },
      ]}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
