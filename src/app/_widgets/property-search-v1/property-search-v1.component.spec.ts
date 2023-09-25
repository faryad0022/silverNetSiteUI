/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertySearchV1Component } from './property-search-v1.component';

describe('PropertySearchV1Component', () => {
  let component: PropertySearchV1Component;
  let fixture: ComponentFixture<PropertySearchV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySearchV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
