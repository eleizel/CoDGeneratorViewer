import { Component } from '@angular/core';

// Define interfaces or classes for your data
interface Human {
  id: number;
  virtue: string;
  vice: string;
  faction: string;
  integrity: number;
  sheetId: number;
}

interface Vampire {
  id: number;
  bloodPotency: number;
  humanity: number;
  mask: string;
  dirge: string;
  clanId: string;
  bloodlineId: string;
  covenantId: string;
}

export interface Sheet {
  id: number;
  name: string;
  age: number;
  player: string;
  concept: string;
  chronicle: string;
  attributesId: number;
  skillsId: number;
  health: number;
  willpower: number;
  size: number;
  speed: number;
  initiative: number;
  defense: number;
}

export interface Attributes {
  id: number;
  intelligence: number;
  wits: number;
  resolve: number;
  strength: number;
  dexterity: number;
  stamina: number;
  presence: number;
  manipulation: number;
  composure: number;
}

export interface Skills {
  id: number;
  academics: number;
  computer: number;
  crafts: number;
  investigation: number;
  medicine: number;
  occult: number;
  politics: number;
  science: number;
  athletics: number;
  brawl: number;
  drive: number;
  firearms: number;
  larceny: number;
  stealth: number;
  survival: number;
  weaponry: number;
  animalKen: number;
  empathy: number;
  expression: number;
  intimidation: number;
  persuasion: number;
  socialize: number;
  streetwise: number;
  subterfuge: number
}

export interface Merit {
  id: number;
  name: string;
  rating: string;
  description: string;
  type: string;
  reference: string;
  prerequisites: string;
}

export interface Discipline {
  disciplineRankId: number;
  disciplineName: string;
  rank: number;
  name: string;
  cost: string;
  prerequisites: string;
  description: string;
  dicePool: string;
}

export interface MortalSheet {
  human: Human;
  sheet: Sheet;
  attributes: Attributes;
  skills: Skills;
  merits: Merit[];
}

export interface VampireSheet {
  vampire: Vampire;
  sheet: Sheet;
  attributes: Attributes;
  skills: Skills;
  merits: Merit[];
  disciplines: Discipline[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CoDGeneratorViewer';

}
