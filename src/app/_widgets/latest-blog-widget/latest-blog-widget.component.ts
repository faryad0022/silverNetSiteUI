import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import {BlogsFeatureOriginImagePth} from 'src/app/_config/pathUtility/pathTool';
@Component({
  selector: 'app-latest-blog-widget',
  templateUrl: './latest-blog-widget.component.html',
})
export class LatestBlogWidgetComponent implements OnInit {
  @Input() blogs:Observable<BlogContentDTO[]>;
  imagePath:string = BlogsFeatureOriginImagePth;
  constructor() { }

  ngOnInit() {
  }

}
