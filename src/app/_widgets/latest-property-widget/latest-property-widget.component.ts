import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { PropertyComponent } from 'src/app/pages/property/property.component';

@Component({
  selector: 'app-latest-property-widget',
  templateUrl: './latest-property-widget.component.html',
})
export class LatestPropertyWidgetComponent implements OnInit {
  @Input() properties: PropertyDTO[];
  imagePath: string = PropertyFeatureOriginImagePth;
  constructor() { }

  ngOnInit() {
  }

}
