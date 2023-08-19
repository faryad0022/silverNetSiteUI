import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, MarkdownEditorService, QuickToolbarSettingsModel, TableService, RichTextEditorComponent, NodeSelection } from '@syncfusion/ej2-angular-richtexteditor';
import { AboutUsImagePth } from '../../pathUtility/pathTool';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared-text-editor',
  templateUrl: './shared-text-editor.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, MarkdownEditorService, TableService],
  styleUrls: ['./shared-text-editor.component.scss']
})
export class SharedTextEditorComponent implements OnInit {
  public placeholder: String = 'Type Something';
  public rtl = true;
  public quickToolbarSettings: QuickToolbarSettingsModel = {
    table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles'],
    image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
  };
  public insertImageSettings: Object = {
    display: 'inline',
    saveFormat:'Base64'
  };
  public tools: object = {
    type: 'Expand',
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|', 'CreateTable', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode','FullScreen', '|', 'Undo', 'Redo']
  };

  textForm: FormGroup;
  @Input() innerText : string = ''; //use for update
  @Output() outPutText = new EventEmitter<string>();
  @ViewChild('fromRTE') private rteEle: RichTextEditorComponent | undefined;
  constructor(
    private fb: FormBuilder,
    private alertService:ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.textForm = this.fb.group({
      text: [this.innerText, [Validators.required]]
    });
  }
  rteCreated(): void {    
    this.rteEle!.element.focus();
  }
  add(): void {
    if(this.textForm.valid){      
      this.outPutText.emit(this.textForm.controls.text.value);
    }
    else{      
      this.alertService.error('Please Write your text','Required Field')
    }
  }

}
