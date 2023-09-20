import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogsFeatureOriginImagePth } from './_config/pathUtility/pathTool';
import { BlogContentService } from './_core/_services/blog.service';
import { SocialService } from './_core/_services/social.service';
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
    private blogSrevice: BlogContentService,
    private socialService: SocialService,
  ) { }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

  ngOnInit(): void {
    this.getLatestBlog();
    this.getSocials();
  }
  getLatestBlog() {
    this.subManager.add(
      this.blogSrevice.getLatestBlogsWithDetails().subscribe(data => {
        this.blogs = data.data
      })
    );
  }
  getSocials() {
    this.subManager.add(
      this.socialService.getAllSocial().subscribe(data => {
        this.socials = data.data
      })
    );
  }
}
