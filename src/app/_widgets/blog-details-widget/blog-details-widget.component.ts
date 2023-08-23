import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BlogsFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import { ResponseData } from 'src/app/_core/data/responseData';

@Component({
  selector: 'app-blog-details-widget',
  templateUrl: './blog-details-widget.component.html',
  styleUrls: ['./blog-details-widget.component.css']
})
export class BlogDetailsWidgetComponent implements OnInit {
  @Input() blog: BlogContentDTO;
  imagePath:string = BlogsFeatureOriginImagePth;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {    
  }

}
