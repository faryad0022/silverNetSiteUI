import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityDTO } from 'src/app/_core/data/city/cityDTO';
import { ContractTypeDTO } from 'src/app/_core/data/contractType/contractTypeDTO';
import { FilterPropertyDTO } from 'src/app/_core/data/property/filterPropertyDTO';
import { PropertyTypeDTO } from 'src/app/_core/data/propertyType/propertyTypeDTO';

@Component({
  selector: 'app-property-filter-aside-widget',
  templateUrl: './property-filter-aside-widget.component.html',
})
export class PropertyFilterAsideWidgetComponent implements OnInit {
  @Input() cities:CityDTO[];
  @Input() contractTypes:ContractTypeDTO[];
  @Input() propertyTypes:PropertyTypeDTO[];
  @Output() search = new EventEmitter<FilterPropertyDTO>();
  filter = new FilterPropertyDTO(0,0,0,0,0,0,0,0,[],0,0,0,0,0,0,0,0,true,0);
  constructor() { }

  ngOnInit() {
    
  }
  handlefilterByCity(city:CityDTO)
  {
    this.filter.cityId = city.id;
    this.search.emit(this.filter);
    
  }
  handlefilterBypropertyType(prtopertyType:PropertyTypeDTO)
  {
    this.filter.propertyTypeId = prtopertyType.id;
    this.search.emit(this.filter);
    
  }
  handlefilterByContractType(contractType:ContractTypeDTO)
  {
    this.filter.propertyContractTypeId = contractType.id;
    this.search.emit(this.filter); 
  }
  handlefilterByNumberOfBedRoom(bedroom:number){
    this.filter.numberOfBedroom = bedroom;
    this.search.emit(this.filter);
  }
  handlefilterByNumberOfBathRoom(bathRoom:number){
    this.filter.numberOfBathroom = bathRoom;
    this.search.emit(this.filter);
  }
  resetFilter(){
    let resetFilterValues = new FilterPropertyDTO(0,0,0,0,0,0,0,0,[],0,0,0,0,0,0,0,0,true,0);
    this.search.emit(resetFilterValues);
  }
}
