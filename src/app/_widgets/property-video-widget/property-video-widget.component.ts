import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PropertyVideoDTO } from 'src/app/_core/data/propertyVideo/propertyVideoDTO';

@Component({
  selector: 'app-property-video-widget',
  templateUrl: './property-video-widget.component.html',
})
export class PropertyVideoWidgetComponent implements OnInit {
  @Input() propertyVideo: PropertyVideoDTO[];
  constructor(
    public sanitizer: DomSanitizer

  ) { }

  ngOnInit() {
  }

}
