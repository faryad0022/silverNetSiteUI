import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LatestPropertyComponent } from 'src/app/_widgets/latest-property/latest-property.component';
import { PropertTypeComponent } from 'src/app/_widgets/propert-type/propert-type.component';
import { RealestateServicesComponent } from 'src/app/_widgets/realestate-services/realestate-services.component';
import { LatestBlogComponent } from 'src/app/_widgets/latest-blog/latest-blog.component';
import { BannerComponent } from 'src/app/_widgets/banner/banner.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    CarouselModule,
  ],
  declarations: [
    HomeComponent,
    LatestPropertyComponent,
    PropertTypeComponent,
    RealestateServicesComponent,
    LatestBlogComponent,
    BannerComponent
  ],
})
export class HomeModule { }
