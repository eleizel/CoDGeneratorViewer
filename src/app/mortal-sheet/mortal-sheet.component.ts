// character-sheet-card.component.ts
import { Component, Input } from '@angular/core';
import { MortalSheet, Skills, Attributes } from '../app.component'; 


@Component({
  selector: 'mortal-sheet',
  templateUrl: './mortal-sheet.component.html',
  styleUrls: ['./mortal-sheet.component.scss'],
})
export class MortalSheetComponent {
  @Input() mortalSheet!: MortalSheet;
  
  transformSkillsToArray(skills: Skills): { name: string; value: number }[] {
    return Object.entries(skills)
                    .filter(([name])=> name!== 'id')
                    .map(([name, value]) => ({ name, value }));
  }

  transformAttributesToArray(attributes: Attributes): { name: string; value: number }[] {
    return Object.entries(attributes)
                  .filter(([name])=> name!== 'id').map(([name, value]) => ({ name, value }));
  }
}

