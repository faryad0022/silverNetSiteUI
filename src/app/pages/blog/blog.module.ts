import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListWidgetComponent } from 'src/app/_widgets/blog-list-widget/blog-list-widget.component';
import { BlogDetailsWidgetComponent } from 'src/app/_widgets/blog-details-widget/blog-details-widget.component';
import { BlogSearchWidgetComponent } from 'src/app/_widgets/blog-search-widget/blog-search-widget.component';
import { LatestBlogWidgetComponent } from 'src/app/_widgets/latest-blog-widget/latest-blog-widget.component';
import { LatestBlogWidgetV2Component } from 'src/app/_widgets/latest-blog-widget-v2/latest-blog-widget-v2.component';

@NgModule({
  imports: [
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailsComponent,
    BlogListWidgetComponent,
    BlogDetailsWidgetComponent,
    BlogSearchWidgetComponent,
    LatestBlogWidgetV2Component
  ]
})
export class BlogModule { }
