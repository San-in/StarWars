import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors.ts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.lightBlue,
    borderBottomWidth: 1,
  },
  label: {fontWeight: 'bold', fontSize: 18, lineHeight: 26},
  value: {fontSize: 16},
});
