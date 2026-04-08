export interface Wand {
  wood: string;
  core: string;
  length: number;
}

export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
  wand: Wand;
}