/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LatestBlogWidgetV2Component } from './latest-blog-widget-v2.component';

describe('LatestBlogWidgetV2Component', () => {
  let component: LatestBlogWidgetV2Component;
  let fixture: ComponentFixture<LatestBlogWidgetV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestBlogWidgetV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogWidgetV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
