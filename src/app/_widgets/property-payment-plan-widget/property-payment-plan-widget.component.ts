import { Component, Input, OnInit } from '@angular/core';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';

@Component({
  selector: 'app-property-payment-plan-widget',
  templateUrl: './property-payment-plan-widget.component.html',
})
export class PropertyPaymentPlanWidgetComponent implements OnInit {
  @Input() property: PropertyDTO;
  constructor() { }

  ngOnInit() {
  }

}
