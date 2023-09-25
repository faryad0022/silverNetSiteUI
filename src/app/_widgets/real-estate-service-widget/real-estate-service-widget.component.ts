import { Component, Input, OnInit } from '@angular/core';
import { RealEstateServiceDTO } from 'src/app/_core/data/realestate-service/realestateServiceDTO';

@Component({
  selector: 'app-real-estate-service-widget',
  templateUrl: './real-estate-service-widget.component.html',
})
export class RealEstateServiceWidgetComponent implements OnInit {
  @Input() services:RealEstateServiceDTO[];
  @Input() serviceImagePath:string;
  constructor() { }

  ngOnInit() {
  }

}
