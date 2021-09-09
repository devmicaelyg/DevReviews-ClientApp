import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ProductsListComponent } from './pages/dashboard/products/products-list/products-list.component';

const routes: Routes = [
  {
  path: '', component: HomePageComponent
  },
  {
  path: 'my-account', component: MyAccountComponent
  },
  {
  path: 'dashboard', component: DashboardComponent
  },
  {
  path: 'product-list', component: ProductsListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
