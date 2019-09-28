import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeajeComponent } from './peaje.component';

describe('PeajeComponent', () => {
  let component: PeajeComponent;
  let fixture: ComponentFixture<PeajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeajeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
