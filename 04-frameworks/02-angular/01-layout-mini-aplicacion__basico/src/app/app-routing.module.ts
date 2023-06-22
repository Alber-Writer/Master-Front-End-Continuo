import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { RotateImagesDirectiveComponent } from './rotate-images-directive/rotate-images-directive.component';

import { guardRoutesGuard } from './guard-routes.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  {
    path: 'p',
    canActivate: [guardRoutesGuard],
    children: [
      { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
      { path: 'gallery', title: 'Gallery', component: GalleryComponent },
      { path: 'crud', title: 'Crud', component: CrudComponent },
      { path: 'profile', title: 'Profile', component: ProfileComponent },
      {
        path: 'rotate',
        title: 'Rotate images',
        component: RotateImagesDirectiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
