import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertTypeComponent } from './propert-type.component';

describe('PropertTypeComponent', () => {
  let component: PropertTypeComponent;
  let fixture: ComponentFixture<PropertTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertTypeComponent]
    });
    fixture = TestBed.createComponent(PropertTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
