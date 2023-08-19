import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { PropertyRoutingModule } from './property-routing.module';

@NgModule({
  imports: [
    PropertyRoutingModule
  ],
  declarations: [PropertyComponent]
})
export class PropertyModule { }
