import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropertyFeatureOriginImagePth, PropertyGalleryOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { PropertyGalleryDTO } from 'src/app/_core/data/propertyGallery/propertyGalleryDTO';
import { PropertyVideoDTO } from 'src/app/_core/data/propertyVideo/propertyVideoDTO';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
})
export class PropertyDetailsComponent implements OnInit, OnDestroy {
  propertyId: number;
  property!: PropertyDTO;
  propertyGallery!: PropertyGalleryDTO[];
  propertyVideo: PropertyVideoDTO[];
  propertyFeatureImagePath: string = PropertyFeatureOriginImagePth;
  propertyGalleryOriginImagePth: string =PropertyGalleryOriginImagePth;
  subManager = new Subscription();
  constructor(
    private activatedRout: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    this.subManager.add(
      this.activatedRout.data.subscribe(
        ({ property, gallery, video }) => {
          if (property.status === 'Success') {
            this.property = property.data;
          }
          if (property.status !== 'Success') {
            this.router.navigate(['/home']);
          }
          this.propertyGallery = gallery.data;
          this.propertyVideo = video.data;
        })
    );



  }


  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

}
