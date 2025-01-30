import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice07Component } from './practice07.component';

describe('Practice07Component', () => {
  let component: Practice07Component;
  let fixture: ComponentFixture<Practice07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
