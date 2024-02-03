export const getNextPeople = async (url: string) => {
  try {
    const response: Response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
