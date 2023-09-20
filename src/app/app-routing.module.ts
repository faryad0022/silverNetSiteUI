import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestBlogResolver } from './_core/_resolvers/latestBlog.resolver';
import { SocialResolver } from './_core/_resolvers/social.resolver';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('../app/_shared/layout/layout.module').then(m => m.LayoutModule),

  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
