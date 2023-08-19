import { NgModule } from '@angular/core';
import { BreadCrumbWidgetComponent } from 'src/app/_widgets/bread-crumb-widget/bread-crumb-widget.component';
import { ContactWidgetComponent } from 'src/app/_widgets/contact-widget/contact-widget.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    
  ],
  declarations: [
    ContactComponent,
    ContactWidgetComponent,
    BreadCrumbWidgetComponent
  ]
})
export class ContactModule { }
