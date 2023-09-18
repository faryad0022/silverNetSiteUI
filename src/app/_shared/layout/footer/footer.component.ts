import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogsFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  @Input() blogs: Observable<BlogContentDTO[]>;
  @Input()  imagePath:string;

  constructor(
  ) { }

  ngOnInit() {    
  }

}
