import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BlogContentService } from 'src/app/_core/_services/blog.service';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import { ResponseData } from 'src/app/_core/data/responseData';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  blogId : number;
  blog:BlogContentDTO;
  constructor(
    private activatedRoute:ActivatedRoute,
    private blogService:BlogContentService,
    private router:Router
  ) { }

  ngOnInit() {
    this.subManager.add(
      this.activatedRoute.paramMap.subscribe(param => {
        this.blogId = parseInt(param.get('blogId'));        
      })
    );
    this.getBlog(this.blogId);
  }
  getBlog(blogId: number){
    this.subManager.add(
      this.blogService.getBlogContentWithDetails(blogId).subscribe(blog=>{
        if(blog.status === 'Success'){
          this.blog = blog.data
        }
        if(blog.status == 'NotFound'){
          this.router.navigate(['/home']);
        }
      })
    );
  
  }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }


}
