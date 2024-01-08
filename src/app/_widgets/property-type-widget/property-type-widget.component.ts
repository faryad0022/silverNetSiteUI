import { Component, Input, OnInit } from '@angular/core';
import { PropertyTypeDTO } from 'src/app/_core/data/propertyType/propertyTypeDTO';

@Component({
  selector: 'app-property-type-widget',
  templateUrl: './property-type-widget.component.html',
})
export class PropertyTypeWidgetComponent implements OnInit {
  @Input() propertyTypes:PropertyTypeDTO[];

  constructor() { }

  ngOnInit() {
  }
  searchbyPropertyType(){
    
  }
}
