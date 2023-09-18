import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogContentService } from 'src/app/_core/_services/blog.service';
import { BlogDetailsWidgetComponent } from 'src/app/_widgets/blog-details-widget/blog-details-widget.component';
import { BlogListWidgetComponent } from 'src/app/_widgets/blog-list-widget/blog-list-widget.component';
import { BlogSearchWidgetComponent } from 'src/app/_widgets/blog-search-widget/blog-search-widget.component';
import { LatestBlogWidgetV2Component } from 'src/app/_widgets/latest-blog-widget-v2/latest-blog-widget-v2.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule
  ],
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailsComponent,
    BlogListWidgetComponent,
    BlogDetailsWidgetComponent,
    BlogSearchWidgetComponent,
    LatestBlogWidgetV2Component
  ],
  providers:[
    BlogContentService
  ]
})
export class BlogModule { }
