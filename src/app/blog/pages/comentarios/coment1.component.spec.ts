import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coment1Component } from './coment1.component';

describe('Coment1Component', () => {
  let component: Coment1Component;
  let fixture: ComponentFixture<Coment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
