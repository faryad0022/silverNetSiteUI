import { NgModule } from '@angular/core';
import { SharedTextEditorComponent } from './shared-text-editor.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
@NgModule({
  imports: [
    SharedModulesModule,
    RichTextEditorAllModule,
    DialogModule
  ],
  declarations: [
    SharedTextEditorComponent
  ],
  exports:[
    SharedTextEditorComponent
  ]
})
export class SharedTextEditorModule { }
