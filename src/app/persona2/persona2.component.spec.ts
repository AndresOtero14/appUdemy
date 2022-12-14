import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona2Component } from './persona2.component';

describe('Persona2Component', () => {
  let component: Persona2Component;
  let fixture: ComponentFixture<Persona2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Persona2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Persona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
