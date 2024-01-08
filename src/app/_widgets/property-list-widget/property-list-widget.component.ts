import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { PropertyFeatureOriginImagePth } from 'src/app/_config/pathUtility/pathTool';
import { PropertyService } from 'src/app/_core/_services/property.service';
import { FilterPropertyDTO } from 'src/app/_core/data/property/filterPropertyDTO';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';

@Component({
  selector: 'app-property-list-widget',
  templateUrl: './property-list-widget.component.html',
})
export class PropertyListWidgetComponent implements OnInit, OnDestroy {
  @Input() filterProperties: FilterPropertyDTO;
  pages: number[] = [];
  subManager = new Subscription();
  imageAddress: string = PropertyFeatureOriginImagePth;

  constructor(
    private propertyService:PropertyService

  ) {
  }
  ngOnInit() {
    this.propertyService.getFilterValues()
    // this pipe is used to be sure not null subject return
    .pipe(filter((data): data is FilterPropertyDTO => !!data))
    .subscribe(data=>{
      this.filterProperties = data;
      this.pages = [];
      for (let i = data.startPage; i <= data.endPage; i++) {
        this.pages.push(i);
      }
    });
  }
  setPage(page:number){
    this.filterProperties.pageId = page;
    this.propertyService.getFilteredProperties(this.filterProperties).subscribe(res=>{
      this.filterProperties = res.data;
    });
  }
  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
