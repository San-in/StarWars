import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors.ts';

export const styles = StyleSheet.create({
  scroll: {marginTop: '33.33%'},
  card: {
    width: 300,
    padding: 20,
    borderWidth: 3,
    borderColor: COLORS.lightBlue,
    backgroundColor: COLORS.white_opacity,
  },
  title: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
