import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateServicesComponent } from './realestate-services.component';

describe('RealestateServicesComponent', () => {
  let component: RealestateServicesComponent;
  let fixture: ComponentFixture<RealestateServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealestateServicesComponent]
    });
    fixture = TestBed.createComponent(RealestateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
