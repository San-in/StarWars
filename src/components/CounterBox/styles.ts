import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors.ts';

export const styles = StyleSheet.create({
  box: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: COLORS.lightBlue,
    backgroundColor: COLORS.white_opacity,
  },
  boxName: {fontSize: 20, marginBottom: 10},
  boxValue: {fontSize: 24, fontWeight: 'bold'},
});
