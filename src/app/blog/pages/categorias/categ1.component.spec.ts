import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categ1Component } from './categ1.component';

describe('Categ1Component', () => {
  let component: Categ1Component;
  let fixture: ComponentFixture<Categ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
