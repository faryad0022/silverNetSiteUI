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
  @Input() cities:CityDTO[];
  @Input() contractTypes:ContractTypeDTO[];
  @Input() propertyTypes:PropertyTypeDTO[];
  @Output() search = new EventEmitter<FilterPropertyDTO>();

  selectedContractType: ContractTypeDTO | undefined;
  selectedpropertyTypes: PropertyTypeDTO | undefined;
  selectedcities: CityDTO | undefined;
  searchForm: FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.searchForm = this.fb.group({
      selectedContractType: [,[Validators.required]],
      selectedPropertyType: [,[Validators.required]],
      selectedCity: [,[Validators.required]],
    });
  }
  handleSearch(){
    if(this.searchForm.valid){
      let filter: FilterPropertyDTO = {
         propertyDTO: [],
         minPrice: null,
         maxPrice:null,
         propertyContractTypeId:this.searchForm.controls.selectedContractType.value,
         propertyTypeId:this.searchForm.controls.selectedPropertyType.value,
         cityId:this.searchForm.controls.selectedCity.value,
         numberOfBedroom:null,
         numberOfBathroom:null,
         floorSpace:null,//متراژ
         propertyStatus:true,//true = available , false = notavailable
      }
      
      this.search.emit(filter);
    }
    
  }

}
