import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortalSheetComponent } from './mortal-sheet.component';

describe('MortalSheetComponent', () => {
  let component: MortalSheetComponent;
  let fixture: ComponentFixture<MortalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortalSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
