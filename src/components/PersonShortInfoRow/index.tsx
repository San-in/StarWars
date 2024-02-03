import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getBackgroundColorByGender} from '../../helpers/getBackgroundColorByGender.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {
  decreaseMaleCount,
  increaseMaleCount,
  selectMaleCounter,
} from '../../redux/slices/maleSlice.ts';

import {
  decreaseFemaleCount,
  increaseFemaleCount,
  selectFemaleCounter,
} from '../../redux/slices/femaleSlice.ts';
import {
  decreaseOtherGenderCount,
  increaseOtherGenderCount,
  selectOtherGenderCounter,
} from '../../redux/slices/otherGenderSlice.ts';
import {HeartIcon} from '../icons/HeartIcon.tsx';
import {Genders} from '../../common/enums/Genders.ts';
import {SCREENS} from '../../common/interfaces/enums.ts';
import {RootStackParamList} from '../../common/interfaces/navigations.ts';
import {styles} from './styles.ts';
import {Person} from '../../common/interfaces/data.ts';

interface Props {
  item: Person;
}
export const PersonShortInfoRow = React.memo(({item}: Props) => {
  const dispatch = useAppDispatch();
  const navigation: NavigationProp<RootStackParamList, SCREENS.HOME> =
    useNavigation();
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const {gender, name} = item;
  const backgroundColor = getBackgroundColorByGender(gender);
  const maleCount = useAppSelector(selectMaleCounter);
  const femaleCount = useAppSelector(selectFemaleCounter);
  const otherCount = useAppSelector(selectOtherGenderCounter);
  const onIncrease = (currentGender: string) => {
    setIsFilled(true);
    if (currentGender === Genders.MALE) {
      dispatch(increaseMaleCount());
    } else if (currentGender === Genders.FEMALE) {
      dispatch(increaseFemaleCount());
    } else {
      dispatch(increaseOtherGenderCount());
    }
  };
  const onDecrease = (currentGender: string) => {
    setIsFilled(false);
    if (currentGender === Genders.MALE) {
      dispatch(decreaseMaleCount());
    } else if (currentGender === Genders.FEMALE) {
      dispatch(decreaseFemaleCount());
    } else {
      dispatch(decreaseOtherGenderCount());
    }
  };

  const onRedirectOnFullInfo = () => {
    navigation.navigate(SCREENS.INFO, {name});
  };

  useEffect(() => {
    if (!maleCount && !femaleCount && !otherCount) {
      setIsFilled(false);
    }
  }, [maleCount, femaleCount, otherCount]);

  return (
    <View style={[styles.container, backgroundColor]}>
      {isFilled ? (
        <Pressable onPress={() => onDecrease(gender)}>
          <HeartIcon isFilled />
        </Pressable>
      ) : (
        <Pressable onPress={() => onIncrease(gender)}>
          <HeartIcon />
        </Pressable>
      )}
      <Pressable onPress={onRedirectOnFullInfo} style={styles.nameWrapper}>
        <Text style={styles.name}>{name}</Text>
      </Pressable>
      <Text>{gender}</Text>
    </View>
  );
});
