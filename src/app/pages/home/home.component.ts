import { Component, OnInit } from '@angular/core';
import { BannerOriginImagePath } from 'src/app/_config/pathUtility/pathTool';
import { BannerService } from 'src/app/_core/_services/banner.service';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners: Observable<BannerDTO[]>;
  blogs: Observable<BlogContentDTO[]>;
  properties: Observable<PropertyDTO[]>;
  constructor(
    private store:Store<fromStore.HomeManagementState>,
  ) {}

  ngOnInit() {
    setInterval(()=>{
      this.getBanners();
      this.getLatestBlog();
      this.getLatestProperty();

    },50);

  }
  getBanners(){
    this.banners = this.store.select(fromStore.getBanners);
  }
  getLatestBlog(){
    this.blogs = this.store.select(fromStore.getLatestBlogs);
  }
  getLatestProperty(){
    this.properties = this.store.select(fromStore.getLatestProperty);
  }
}
