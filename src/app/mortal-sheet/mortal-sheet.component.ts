// character-sheet-card.component.ts
import { Component, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MortalSheet, Skills, Attributes, Merit } from '../app.component'; 

@Component({
  selector: 'mortal-sheet',
  templateUrl: './mortal-sheet.component.html',
  styleUrls: ['./mortal-sheet.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class MortalSheetComponent {
  @Input() mortalSheet!: MortalSheet;
  panelOpenState = false;
  columnsToDisplay = ['name', 'rating', 'expand'];

  expandedElement: any | null;

  isExpanded(row: any): boolean {
    return this.expandedElement === row;
  }

  toggleRow(row: any): void {
    this.expandedElement = this.isExpanded(row) ? null : row;
  }
  
  transformSkillsToArray(skills: Skills): { name: string; value: number }[] {
    return Object.entries(skills)
                    .filter(([name])=> name!== 'id')
                    .map(([name, value]) => ({ name, value }));
  }

  transformAttributesToArray(attributes: Attributes): { name: string; value: number }[] {
    return Object.entries(attributes)
                  .filter(([name])=> name!== 'id')
                  .map(([name, value]) => ({ name, value }));
  }
}

