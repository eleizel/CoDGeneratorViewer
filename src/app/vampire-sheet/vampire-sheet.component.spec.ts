import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VampireSheetComponent } from './vampire-sheet.component';

describe('VampireSheetComponent', () => {
  let component: VampireSheetComponent;
  let fixture: ComponentFixture<VampireSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VampireSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VampireSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
