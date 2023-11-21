import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerWidgetComponent } from 'src/app/_widgets/banner-widget/banner-widget.component';
import { PropertyTypeWidgetComponent } from 'src/app/_widgets/property-type-widget/property-type-widget.component';
import { RealEstateServiceWidgetComponent } from 'src/app/_widgets/real-estate-service-widget/real-estate-service-widget.component';
import { LatestBlogWidgetComponent } from 'src/app/_widgets/latest-blog-widget/latest-blog-widget.component';
import { LatestPropertyWidgetComponent } from 'src/app/_widgets/latest-property-widget/latest-property-widget.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PropertySearchV1Component } from 'src/app/_widgets/property-search-v1/property-search-v1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { FocusTrapModule } from 'primeng/focustrap';
@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    StyleClassModule,
    FocusTrapModule
  ],
  declarations: [
    HomeComponent,
    BannerWidgetComponent,
    PropertyTypeWidgetComponent,
    RealEstateServiceWidgetComponent,
    LatestBlogWidgetComponent,
    LatestPropertyWidgetComponent,
    PropertySearchV1Component

  ],
  providers:[
    

  ]
})
export class HomeModule { }
