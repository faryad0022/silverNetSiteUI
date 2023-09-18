import { Component, Input, OnInit } from '@angular/core';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';

@Component({
  selector: 'app-latest-blog-widget-v2',
  templateUrl: './latest-blog-widget-v2.component.html',
})
export class LatestBlogWidgetV2Component implements OnInit {
  @Input() latestBlogs: BlogContentDTO[];
  @Input() blogImagePath: string;
  constructor() { }

  ngOnInit() {
  }

}
