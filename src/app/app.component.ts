import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogsFeatureOriginImagePth } from './_config/pathUtility/pathTool';
import { BlogContentDTO } from './_core/data/blogContent/blogContentDTO';
import { SocialDTO } from './_core/data/social/socialDTO';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'site';
  subManager = new Subscription();
  blogs: BlogContentDTO[];
  socials: SocialDTO[];
  imagePath: string = BlogsFeatureOriginImagePth;

  constructor(

  ) { }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

  ngOnInit(): void {
  }

}
