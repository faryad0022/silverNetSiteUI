import { Component, Input, OnInit } from '@angular/core';
import { BannerOriginImagePath } from 'src/app/_config/pathUtility/pathTool';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';

@Component({
  selector: 'app-banner-widget',
  templateUrl: './banner-widget.component.html',
})
export class BannerWidgetComponent implements OnInit {
  @Input() banners!: BannerDTO[];
  imagePathOrigin = BannerOriginImagePath;

  constructor() { }

  ngOnInit() {
  }

}
