import {SEARCH_PERSON_URL} from '../common/constants.ts';

export const getPersonByName = async (name: string) => {
  try {
    const response = await fetch(`${SEARCH_PERSON_URL}${name}`);
    const formattedResponse = await response.json();
    return formattedResponse.results[0];
  } catch (error) {
    console.log(error);
  }
};
