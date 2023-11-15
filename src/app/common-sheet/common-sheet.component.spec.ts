import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSheetComponent } from './common-sheet.component';

describe('CommonSheetComponent', () => {
  let component: CommonSheetComponent;
  let fixture: ComponentFixture<CommonSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
