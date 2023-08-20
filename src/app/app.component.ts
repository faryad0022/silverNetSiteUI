import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site';

  constructor(
    private store:Store<fromStore.HomeManagementState>
  ){}
  ngOnInit(): void {
    this.getHomePageData();
  }
  getHomePageData(){
    this.store.dispatch(fromStore.GetAllHome());

  }

}
