import {PEOPLE_URL} from '../common/constants.ts';
import {Data} from '../common/interfaces/data.ts';

export const getInitialData = async () => {
  try {
    const firstPage: Response = await fetch(PEOPLE_URL);
    const firstPageData: Data = await firstPage.json();
    const secondPage: Response = await fetch(firstPageData.next);
    const secondPageData: Data = await secondPage.json();

    return {
      next: secondPageData.next,
      results: [...firstPageData.results, ...secondPageData.results],
    };
  } catch (error) {
    console.log(error);
  }
};
