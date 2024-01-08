import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RealEstateServiceOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { PropertyService } from 'src/app/_core/_services/property.service';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';
import { BlogContentDTO } from 'src/app/_core/data/blogContent/blogContentDTO';
import { CityDTO } from 'src/app/_core/data/city/cityDTO';
import { ContractTypeDTO } from 'src/app/_core/data/contractType/contractTypeDTO';
import { FilterPropertyDTO } from 'src/app/_core/data/property/filterPropertyDTO';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { PropertyTypeDTO } from 'src/app/_core/data/propertyType/propertyTypeDTO';
import { RealEstateServiceDTO } from 'src/app/_core/data/realestate-service/realestateServiceDTO';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  serviceImagePath:string = RealEstateServiceOriginImagePth;
  banners: BannerDTO[];
  blogs: BlogContentDTO[];
  properties: PropertyDTO[];
  cities:CityDTO[];
  contractTypes:ContractTypeDTO[];
  propertyTypes:PropertyTypeDTO[];
  services: RealEstateServiceDTO[];
  subManager = new Subscription();
  constructor(
    private activatedRote: ActivatedRoute,
    private propertyService: PropertyService,
    private route:Router
  ) { }
  ngOnInit() {
    this.subManager.add(
      this.activatedRote.data.subscribe(
        ({ banners, latestBlogs, latestProperty,contractType, propertyType,cities,services}) => {
          this.banners = banners.data;
          this.blogs = latestBlogs.data;
          this.properties = latestProperty.data;
          this.cities = cities.data;
          this.propertyTypes = propertyType.data;
          this.contractTypes = contractType.data;
          this.services = services.data;
        }
      )
    );
  }

  search(filter:FilterPropertyDTO)
  {
    this.propertyService.setFilterValues(filter);    
    this.route.navigate(['property/list']); 
  }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
