import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import { SocialDTO } from 'src/app/_core/data/social/socialDTO';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = 'site';
  subManager = new Subscription();
  blogs: BlogContentDTO[];
  socials: SocialDTO[];
  imagePath: string = BlogsFeatureOriginImagePth;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

  ngOnInit(): void {
    this.subManager.add(
      this.activatedRoute.data.subscribe(
        ({ socials, latestBlogs }) => {
          this.socials = socials.data;
          this.blogs = latestBlogs.data;
        }
      )
    );

  }
}
