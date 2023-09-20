import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayOutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    LayOutRoutingModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
