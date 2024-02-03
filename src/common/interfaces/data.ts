export interface Person {
  name: string;
  gender: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  mass: string;
  height: string;
  url: string;
}
export interface Data {
  next: string;
  results: Person[];
}
