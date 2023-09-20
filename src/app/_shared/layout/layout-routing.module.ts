import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  // },
  // {
  //   path: 'error',
  //   loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  // },
  // {
  //   path: 'property',
  //   loadChildren: () => import('./pages/property/property.module').then(m => m.PropertyModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  //   //resolve:{banners: BannerResolver}
  // },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
