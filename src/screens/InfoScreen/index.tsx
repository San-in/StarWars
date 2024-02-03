import React, {JSX, useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../common/interfaces/navigations.ts';
import {SCREENS} from '../../common/interfaces/enums.ts';
import {Person} from '../../common/interfaces/data.ts';
import {BACKGROUND_IMAGE} from '../../common/constants.ts';
import {getPersonByName} from '../../services/getPersonByName.ts';
import {PersonFullInfoCard} from '../../components/PersonFullInfoCard';
import {styles} from './styles.ts';

interface Props {
  route: RouteProp<RootStackParamList, SCREENS.INFO>;
}
export const InfoScreen = ({route}: Props): JSX.Element => {
  const navigation: NavigationProp<RootStackParamList, SCREENS.HOME> =
    useNavigation();
  const [person, setPerson] = useState<Person | null>(null);
  const name = route?.params.name;

  const redirectToBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const init = async () => {
      const response: Person = await getPersonByName(name);
      setPerson(response);
    };
    init();
  }, [name]);

  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: BACKGROUND_IMAGE,
      }}
      style={styles.background}>
      {person ? (
        <PersonFullInfoCard person={person} redirectToBack={redirectToBack} />
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </ImageBackground>
  );
};
