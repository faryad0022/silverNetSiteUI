import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      { path: 'list', component: PropertyListComponent },
      { path: 'details', component: PropertyDetailsComponent },
      { path: '**', redirectTo: 'error'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }