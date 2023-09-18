import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyFilterAsideWidgetComponent } from 'src/app/_widgets/property-filter-aside-widget/property-filter-aside-widget.component';
import { PropertyListWidgetComponent } from 'src/app/_widgets/property-list-widget/property-list-widget.component';
import { PropertyGalleryWidgetComponent } from 'src/app/_widgets/property-gallery-widget/property-gallery-widget.component';
import { ContactFormPropertyWidgetComponent } from 'src/app/_widgets/contact-form-property-widget/contact-form-property-widget.component';
import { PropertyOverviewWidgetComponent } from 'src/app/_widgets/property-overview-widget/property-overview-widget.component';
import { PropertyDetailsWidgetComponent } from 'src/app/_widgets/property-details-widget/property-details-widget.component';
import { PropertyFacilityWidgetComponent } from 'src/app/_widgets/property-facility-widget/property-facility-widget.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PropertyPaymentPlanWidgetComponent } from 'src/app/_widgets/property-payment-plan-widget/property-payment-plan-widget.component';
import { PropertyVideoWidgetComponent } from 'src/app/_widgets/property-video-widget/property-video-widget.component';

@NgModule({
  imports: [
    PropertyRoutingModule,
    CommonModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot()

  ],
  declarations: [
    PropertyComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    PropertyFilterAsideWidgetComponent,
    PropertyListWidgetComponent,
    PropertyGalleryWidgetComponent,
    ContactFormPropertyWidgetComponent,
    PropertyOverviewWidgetComponent,
    PropertyDetailsWidgetComponent,
    PropertyFacilityWidgetComponent,
    PropertyPaymentPlanWidgetComponent,
    PropertyVideoWidgetComponent
  ]
})
export class PropertyModule { }
