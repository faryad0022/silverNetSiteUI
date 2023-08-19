import { Component, OnInit } from '@angular/core';
import { BannerOriginImagePath } from 'src/app/_config/pathUtility/pathTool';
import { BannerService } from 'src/app/_core/_services/banner.service';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';
@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
