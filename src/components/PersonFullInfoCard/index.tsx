import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {PersonFullInfoRow} from '../PersonFullInfoRow';
import {CustomButton} from '../CustomButton';
import {LeftArrowIcon} from '../icons/LeftArrowIcon.tsx';
import {Person} from '../../common/interfaces/data.ts';
import {styles} from './styles.ts';

interface Props {
  person: Person;
  redirectToBack: () => void;
}
export const PersonFullInfoCard = ({person, redirectToBack}: Props) => {
  const isHasBirthYear =
    !!person?.birth_year && person?.birth_year !== 'unknown';
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {person.name} {isHasBirthYear && `(${person.birth_year})`}
        </Text>
        <PersonFullInfoRow label={'Gender'} value={person.gender} />
        <PersonFullInfoRow label={'Height'} value={person.height} />
        <PersonFullInfoRow label={'Mass'} value={person.mass} />
        <PersonFullInfoRow label={'Eye color'} value={person.eye_color} />
        <PersonFullInfoRow label={'Hair color'} value={person.hair_color} />
        <PersonFullInfoRow
          label={'Skin color'}
          value={person.skin_color}
          isLastRow
        />
        <CustomButton
          onPress={redirectToBack}
          alingSelf={'flex-end'}
          text={'Back to Home'}
          icon={<LeftArrowIcon />}
        />
      </View>
    </ScrollView>
  );
};
