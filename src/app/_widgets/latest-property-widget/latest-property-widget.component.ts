import { Component, Input, OnInit, Output } from '@angular/core';
import { PropertyFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { FilterPropertyDTO } from 'src/app/_core/data/property/filterPropertyDTO';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { PropertyService } from 'src/app/_core/_services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-property-widget',
  templateUrl: './latest-property-widget.component.html',
})
export class LatestPropertyWidgetComponent implements OnInit {
  @Input() properties: PropertyDTO[];
  imagePath: string = PropertyFeatureOriginImagePth;
  constructor(
    private route: Router,
    private propertyService: PropertyService
  ) { }
  goToPropertyList() {
    this.propertyService.resetFilterValues();
    this.route.navigate(['property/list'])
  }
  ngOnInit() {
  }

}
