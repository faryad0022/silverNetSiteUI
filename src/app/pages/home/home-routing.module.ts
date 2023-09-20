import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerResolver } from 'src/app/_core/_resolvers/banner.resolver';
import { LatestBlogResolver } from 'src/app/_core/_resolvers/latestBlog.resolver';
import { LatestPropertyResolver } from 'src/app/_core/_resolvers/latestProperty.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      banners: BannerResolver,
      latestBlogs: LatestBlogResolver,
      latestProperty: LatestPropertyResolver
    },
    children: [
      { path: '**', redirectTo: 'error' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
