import { Component, Input, OnInit } from '@angular/core';
import { Attributes, Merit, Skills } from '../app.component';

@Component({
  selector: 'common-sheet',
  templateUrl: './common-sheet.component.html',
  styleUrls: ['./common-sheet.component.scss']
})
export class CommonSheetComponent implements OnInit {

  @Input() sheet!: any;

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
