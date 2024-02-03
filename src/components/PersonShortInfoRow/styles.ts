import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors.ts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  nameWrapper: {
    flex: 2,
    marginHorizontal: 10,
  },
  name: {fontSize: 16, fontWeight: 'bold', textAlign: 'center'},
});
