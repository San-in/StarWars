import React, {JSX} from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../../redux/hooks.ts';
import {selectMaleCounter} from '../../redux/slices/maleSlice.ts';
import {selectFemaleCounter} from '../../redux/slices/femaleSlice.ts';
import {selectOtherGenderCounter} from '../../redux/slices/otherGenderSlice.ts';
import {Genders} from '../../common/enums/Genders.ts';
import {styles} from './styles.ts';

interface Props {
  name: string;
}
export const CounterBox = ({name}: Props): JSX.Element => {
  const maleCount = useAppSelector(selectMaleCounter);
  const femaleCount = useAppSelector(selectFemaleCounter);
  const otherCount = useAppSelector(selectOtherGenderCounter);

  const getBoxValue = (gender: string) => {
    if (gender === Genders.MALE) {
      return maleCount;
    } else if (gender === Genders.FEMALE) {
      return femaleCount;
    } else {
      return otherCount;
    }
  };
  const boxValue = getBoxValue(name);

  return (
    <View style={styles.box}>
      <Text style={styles.boxName}>{name}</Text>
      <Text style={styles.boxValue}>{boxValue}</Text>
    </View>
  );
};
