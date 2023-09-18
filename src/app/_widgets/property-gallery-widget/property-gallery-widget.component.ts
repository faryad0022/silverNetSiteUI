import { Component, Input, OnInit } from '@angular/core';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { PropertyGalleryDTO } from 'src/app/_core/data/propertyGallery/propertyGalleryDTO';

@Component({
  selector: 'app-property-gallery-widget',
  templateUrl: './property-gallery-widget.component.html',
})
export class PropertyGalleryWidgetComponent implements OnInit {
  @Input() propertyGallery: PropertyGalleryDTO[];
  @Input() property:PropertyDTO;
  @Input() propertyFeatureImagePath: string;
  @Input() propertyGalleryOriginImagePth: string;
  
  //carousel setup
  itemsPerSlide = 5;
  singleSlideOffset = true;
  myInterval = 1500;
  activeSlideIndex = 0;
  noWrap = false;


  constructor() { }

  ngOnInit() {
    console.log(this.propertyGallery);
    
  }

}
