import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { SharedCarouselComponent } from './shared-carousel.component';

@NgModule({
  imports: [
    SharedModulesModule,
    MdbCarouselModule
  ],
  declarations: [SharedCarouselComponent],
  exports:[
    SharedCarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedCarouselModule { }
