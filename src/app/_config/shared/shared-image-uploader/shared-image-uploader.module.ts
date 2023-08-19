import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedImageUploaderComponent } from './shared-image-uploader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedImageUploaderComponent],
  exports:[
    SharedImageUploaderComponent
  ]
})
export class SharedImageUploaderModule { }
