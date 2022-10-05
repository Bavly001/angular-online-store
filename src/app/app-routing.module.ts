import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'products',redirectTo:'products/all', pathMatch: 'full'},
  {path:'products/:data', component: ProductsPageComponent},
  {path:'product/:id', component: ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
