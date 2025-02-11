import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalc } from './imccalc.component';

describe('ImcCalcComponent', () => {
  let component: ImcCalc;
  let fixture: ComponentFixture<ImcCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
