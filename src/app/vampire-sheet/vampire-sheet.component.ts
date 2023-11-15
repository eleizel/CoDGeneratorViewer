import { Component, OnInit, Input } from '@angular/core';
import { VampireSheet, Skills, Attributes } from '../app.component'; 

@Component({
  selector: 'vampire-sheet',
  templateUrl: './vampire-sheet.component.html',
  styleUrls: ['./vampire-sheet.component.scss']
})
export class VampireSheetComponent implements OnInit {
  @Input() vampireSheet!: VampireSheet;


  constructor() { }

  ngOnInit(): void {
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
