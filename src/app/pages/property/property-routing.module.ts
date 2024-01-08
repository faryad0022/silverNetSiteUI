import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyDetailsResolver } from 'src/app/_core/_resolvers/property-details.resolver';
import { PropertyGalleryResolver } from 'src/app/_core/_resolvers/property-gallery.resolver';
import { PropertyVideoResolver } from 'src/app/_core/_resolvers/property-video.resolver';
import { CityResolver } from 'src/app/_core/_resolvers/city.resolver';
import { LatestPropertyResolver } from 'src/app/_core/_resolvers/latestProperty.resolver';
import { PropertyContractTypeResolver } from 'src/app/_core/_resolvers/propertyContractType.resolver';
import { PropertyTypeResolver } from 'src/app/_core/_resolvers/propertyType.resolver';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      {
        path: 'list', 
        component: PropertyListComponent,   
        resolve: {
          latestProperty: LatestPropertyResolver,
          contractType: PropertyContractTypeResolver,
          propertyType: PropertyTypeResolver,
          cities: CityResolver,
        } 
      },
      {
        path: 'details/:propertyId',
        component: PropertyDetailsComponent,
        resolve: { property: PropertyDetailsResolver, gallery: PropertyGalleryResolver, video: PropertyVideoResolver }
      },
      { path: '**', redirectTo: 'error' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }