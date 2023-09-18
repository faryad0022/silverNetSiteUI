import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyDetailsResolver } from 'src/app/_core/_resolvers/property-details.resolver';
import { PropertyGalleryResolver } from 'src/app/_core/_resolvers/property-gallery.resolver';
import { PropertyVideoResolver } from 'src/app/_core/_resolvers/property-video.resolver';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      { path: 'list', component: PropertyListComponent },
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