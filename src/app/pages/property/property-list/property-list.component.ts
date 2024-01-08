import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropertyService } from 'src/app/_core/_services/property.service';
import { CityDTO } from 'src/app/_core/data/city/cityDTO';
import { ContractTypeDTO } from 'src/app/_core/data/contractType/contractTypeDTO';
import { FilterPropertyDTO } from 'src/app/_core/data/property/filterPropertyDTO';
import { PropertyDTO } from 'src/app/_core/data/property/propertyDTO';
import { PropertyTypeDTO } from 'src/app/_core/data/propertyType/propertyTypeDTO';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnDestroy {
  filterProperty: FilterPropertyDTO;
  filter: FilterPropertyDTO;
  cities: CityDTO[];
  contractTypes: ContractTypeDTO[];
  propertyTypes: PropertyTypeDTO[];
  subManager = new Subscription();
  constructor(
    private activatedRote: ActivatedRoute,
    private propertyService: PropertyService
  ) { }
  ngOnInit() {
    this.getFilterValues();
    this.subManager.add(
      this.activatedRote.data.subscribe(
        ({ contractType, propertyType, cities }) => {
          this.cities = cities.data;
          this.propertyTypes = propertyType.data;
          this.contractTypes = contractType.data;
        }
      )
    );
    this.search(this.filter);
  }

  getFilterValues() {
    this.subManager.add(
      this.propertyService.getFilterValues().subscribe((data) => {
        this.filter = data;
      })
    );
  }

  search(filter: FilterPropertyDTO) {
    this.subManager.add(
      this.propertyService.getFilteredProperties(filter)
      .subscribe(data => {
        this.filterProperty = data.data;
        this.propertyService.setFilterValues(data.data);
      })
    );
  }

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

}
