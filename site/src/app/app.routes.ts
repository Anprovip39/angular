import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path :"", component: ProductsComponent},
    {path :"home", component: HomeComponent},
    {path :"products", component: ProductsComponent },
    {path :"contact", component: ContactComponent},
    {path :"about", component: AboutComponent},
    {path :"search", component: SearchComponent},
    {path :"detail/:id", component: DetailComponent},
    {path :"cart", component: CartComponent},
    {path :"signin", component: SigninComponent},
    {path :"signup", component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }