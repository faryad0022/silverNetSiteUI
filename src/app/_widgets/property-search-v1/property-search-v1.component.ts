import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityDTO } from 'src/app/_core/data/city/cityDTO';
import { ContractTypeDTO } from 'src/app/_core/data/contractType/contractTypeDTO';
import { FilterPropertyDTO } from 'src/app/_core/data/property/filterPropertyDTO';
import { PropertyTypeDTO } from 'src/app/_core/data/propertyType/propertyTypeDTO';

@Component({
  selector: 'app-property-search-v1',
  templateUrl: './property-search-v1.component.html',
  styleUrls: ['./property-search-v1.component.css']
})
export class PropertySearchV1Component implements OnInit {
  @Input() cities: CityDTO[];
  @Input() contractTypes: ContractTypeDTO[];
  @Input() propertyTypes: PropertyTypeDTO[];
  @Output() search = new EventEmitter<FilterPropertyDTO>();

  selectedContractType: ContractTypeDTO | undefined;
  selectedpropertyTypes: PropertyTypeDTO | undefined;
  selectedcities: CityDTO | undefined;
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.searchForm = this.fb.group({
      selectedContractType: [, [Validators.required]],
      selectedPropertyType: [, [Validators.required]],
      selectedCity: [, [Validators.required]],
    });
  }
  handleSearch() {

    if (this.searchForm.valid) {
      let filter: FilterPropertyDTO = {
        pageId: 0,
        pageCount: 0,
        activePage: 0,
        startPage: 0,
        endPage: 0,
        takeEntity: 0,
        skipEntity: 0,
        totalRecords: 0,
        propertyDTOs: [],
        minPrice: 0,
        maxPrice: 0,
        propertyContractTypeId: this.searchForm.controls.selectedContractType.value,
        propertyTypeId: this.searchForm.controls.selectedPropertyType.value,
        cityId: this.searchForm.controls.selectedCity.value,
        numberOfBedroom: 0,
        numberOfBathroom: 0,
        floorSpace: 0,//متراژ
        propertyStatus: true,//true = available , false = notavailable
        count: 0
      }

      this.search.emit(filter);
    }

  }

}
