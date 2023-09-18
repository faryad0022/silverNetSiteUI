import { Component, Input, OnInit } from '@angular/core';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';

@Component({
  selector: 'app-property-details-widget',
  templateUrl: './property-details-widget.component.html',
})
export class PropertyDetailsWidgetComponent implements OnInit {
  @Input() property: PropertyDTO;
  constructor() { }

  ngOnInit() {
  }

}
