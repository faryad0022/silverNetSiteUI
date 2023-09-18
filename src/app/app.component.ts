import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { BlogContentDTO } from './_core/data/blogContent/blogContentDTO';
import { Store } from '@ngrx/store';
import { BlogsFeatureOriginImagePth } from './_config/pathUtility/pathTool';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site';
  subManager = new Subscription();
  blogs: Observable<BlogContentDTO[]>;
  imagePath:string = BlogsFeatureOriginImagePth;

  constructor(
    private store:Store<fromStore.HomeManagementState>,
  ) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.getLatestBlog();
    },50);

  }
  getLatestBlog(){
    this.blogs = this.store.select(fromStore.getLatestBlogs);
  }
}
