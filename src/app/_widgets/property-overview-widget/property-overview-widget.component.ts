import { Component, Input, OnInit } from '@angular/core';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';

@Component({
  selector: 'app-property-overview-widget',
  templateUrl: './property-overview-widget.component.html',
})
export class PropertyOverviewWidgetComponent implements OnInit {
  @Input() property: PropertyDTO;
  constructor() { }

  ngOnInit() {
  }

}
