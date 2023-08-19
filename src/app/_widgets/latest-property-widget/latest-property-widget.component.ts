import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-property-widget',
  templateUrl: './latest-property-widget.component.html',
})
export class LatestPropertyWidgetComponent implements OnInit {
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor() { }

  ngOnInit() {
  }

}
