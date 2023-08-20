import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  imports: [
    PropertyRoutingModule
  ],
  declarations: [
    PropertyComponent,
    PropertyListComponent,
    PropertyDetailsComponent
  ]
})
export class PropertyModule { }
