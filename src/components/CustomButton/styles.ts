import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors.ts';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.lightBlue,
    paddingRight: 20,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
  },
  content: {flexDirection: 'row', alignItems: 'center'},
  text: {color: COLORS.white, fontWeight: 'bold', marginLeft: 10},
});
