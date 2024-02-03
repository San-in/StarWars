import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors.ts';

export const styles = StyleSheet.create({
  background: {flex: 1, justifyContent: 'center'},
  container: {justifyContent: 'center', alignItems: 'center'},
  counterContainer: {marginTop: 50, marginBottom: 20},
  counter: {flex: 1, justifyContent: 'space-around'},
  button: {width: '90%'},
  list: {
    width: '90%',
    marginTop: 100,
    marginBottom: 50,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white_opacity,
  },
});
