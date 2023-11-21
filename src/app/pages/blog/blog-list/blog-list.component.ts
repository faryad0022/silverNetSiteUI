import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterBlogContentDTO } from 'src/app/_core/data/blogContent/filterBlogContentDTO';
import { BlogGroupDTO } from 'src/app/_core/data/blogGroup/blogGroupDTO';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  blogGroups: BlogGroupDTO[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.subManager.add(
      this.activatedRoute.data.subscribe(
        ({ blogGroups }) => {
          this.blogGroups = blogGroups.data;
        })
    );

  }
  filterBlog(filter:FilterBlogContentDTO){
    console.log(filter);
    
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

}
