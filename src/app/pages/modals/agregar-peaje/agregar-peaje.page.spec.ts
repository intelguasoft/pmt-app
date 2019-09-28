import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPeajePage } from './agregar-peaje.page';

describe('AgregarPeajePage', () => {
  let component: AgregarPeajePage;
  let fixture: ComponentFixture<AgregarPeajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPeajePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPeajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
