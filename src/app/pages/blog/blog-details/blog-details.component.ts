import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { BlogContentService } from 'src/app/_core/_services/blog.service';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  blogId: number;
  blog: BlogContentDTO;
  latestBlogs: BlogContentDTO[];
  blogImagePath:string = BlogsFeatureOriginImagePth;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subManager.add(
      this.activatedRoute.data.subscribe(
        ({ blog, latestBlog }) => {
          if (blog.status === 'Success') {
            this.blog = blog.data;
          }
          if (blog.status !== 'Success') {
            this.router.navigate(['/home']);
          }
          this.latestBlogs = latestBlog.data;
        })
    );

  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }


}
