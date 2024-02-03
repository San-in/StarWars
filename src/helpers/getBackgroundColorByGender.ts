import {Genders} from '../common/enums/Genders.ts';
import {COLORS} from '../common/colors.ts';

export const getBackgroundColorByGender = (
  gender: string,
): {backgroundColor: string} => {
  if (gender === Genders.FEMALE) {
    return {backgroundColor: COLORS.lavender};
  } else if (gender === Genders.MALE) {
    return {backgroundColor: COLORS.lightBlue};
  } else {
    return {backgroundColor: COLORS.snow};
  }
};
