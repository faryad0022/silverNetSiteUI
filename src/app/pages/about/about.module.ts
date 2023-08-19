import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutWidgetComponent } from 'src/app/_widgets/about-widget/about-widget.component';

@NgModule({
  imports: [
    AboutRoutingModule
  ],
  declarations: [
    AboutWidgetComponent,
    AboutComponent
  ]
})
export class AboutModule { }
