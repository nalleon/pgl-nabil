import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice072Component } from './practice07-2.component';

describe('Practice072Component', () => {
  let component: Practice072Component;
  let fixture: ComponentFixture<Practice072Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice072Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
