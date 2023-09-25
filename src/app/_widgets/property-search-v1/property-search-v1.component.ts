import { Component, Input, OnInit } from '@angular/core';
import { CityDTO } from 'src/app/_core/data/city/cityDTO';
import { ContractTypeDTO } from 'src/app/_core/data/contractType/contractTypeDTO';
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
  constructor() { }

  ngOnInit() {
  }

}
