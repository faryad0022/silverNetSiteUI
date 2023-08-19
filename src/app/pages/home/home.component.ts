import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerOriginImagePath } from 'src/app/_config/pathUtility/pathTool';
import { BannerService } from 'src/app/_core/_services/banner.service';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoWidth:true,
    items:4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  banners!: BannerDTO[];
  imagePathOrigin = BannerOriginImagePath;

  constructor(
    private bannerService:BannerService
  ) { }

  ngOnInit() {
    this.bannerService.getAllBanner().subscribe(data=>{
      console.log(data);
      this.banners = data.data;
    });
  }

}
