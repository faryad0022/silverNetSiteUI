import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() blogs: Observable<BlogContentDTO[]>;
  constructor(
  ) { }

  ngOnInit() {    
  }

}
