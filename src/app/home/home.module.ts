import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path: 'register',
      loadChildren: () => import('../register/register.module').then(item => item.RegisterModule),
    },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then(item => item.LoginModule)
    },
    {
      path: 'user-details',
      loadChildren: () => import('../userdetails/userdetails.module').then(item => item.UserdetailsModule)
    },
    {
      path: 'document',
      loadChildren: () => import('../document/document.module').then(item => item.DocumentModule)
    }
  ]
}];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
