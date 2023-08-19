import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from 'src/app/_metronic/partials';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule,
  ],
  exports:[
    CommonModule,
    RouterModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule,
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedModulesModule { }
