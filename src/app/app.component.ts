import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { BlogContentDTO } from './_core/data/blogContent/blogContentDTO';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site';
  constructor(
  ){

  }
  ngOnInit(): void {
  }
}
