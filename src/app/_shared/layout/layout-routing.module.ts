import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LatestBlogResolver } from 'src/app/_core/_resolvers/latestBlog.resolver';
import { SocialResolver } from 'src/app/_core/_resolvers/social.resolver';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  resolve:{
    latestBlogs: LatestBlogResolver,
    socials: SocialResolver
  },
  children: [
    {
      path: 'home',
      loadChildren: () => import('../../../app/pages/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'about',
      loadChildren: () => import('../../../app/pages/about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'blog',
      loadChildren: () => import('../../../app/pages/blog/blog.module').then(m => m.BlogModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('../../../app/pages/contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'error',
      loadChildren: () => import('../../../app/pages/error/error.module').then(m => m.ErrorModule)
    },
    {
      path: 'property',
      loadChildren: () => import('../../../app/pages/property/property.module').then(m => m.PropertyModule)
    },
    {
      path: '',
      loadChildren: () => import('../../../app/pages/home/home.module').then(m => m.HomeModule),
      //resolve:{banners: BannerResolver}
    },
    { path: '**', redirectTo: 'error', pathMatch: 'full' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
