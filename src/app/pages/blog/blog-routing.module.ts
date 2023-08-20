import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: 'list/:blogGroupId', component: BlogListComponent },
      { path: 'list', component: BlogListComponent },
      { path: 'details', component: BlogDetailsComponent },
      { path: '**', redirectTo: 'error' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }