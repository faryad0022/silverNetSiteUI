import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  banners: BannerDTO[];
  blogs: BlogContentDTO[];
  properties: PropertyDTO[];
  subManager = new Subscription();
  constructor(
    private activatedRote: ActivatedRoute
  ) { }
  ngOnInit() {
    this.subManager.add(
      this.activatedRote.data.subscribe(
        ({ banners, latestBlogs, latestProperty }) => {
          this.banners = banners.data;
          this.blogs = latestBlogs.data;
          this.properties = latestProperty.data;
        }
      )
    );
  }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
