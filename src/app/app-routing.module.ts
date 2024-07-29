import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   //to enable routing
import { AboutComponent } from './about/about.component';
import { AboutproductsComponent } from './aboutproducts/aboutproducts.component';
import { ContactComponent } from './contact/contact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { HttpreqComponent } from './httpreq/httpreq.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProductsComponent } from './products/products.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },    //Used to redirect the path to another component
  { path: 'home', component: HomeComponent },            //Default component Route(Landing Page) 
  { path: 'contact', component: ContactComponent },     //Route-Paramaters
  { path: 'contact/contactlist/:id', component: ContactlistComponent },     //Route-Paramaters
  { path: 'products', component: ProductsComponent },      //Query_Parameters
  { path: 'httpreq', component: HttpreqComponent },         //http requests
  { path: 'about', component: AboutComponent,              //child/nested routing
   children: [ 
    {path: 'aboutproduct/:id', component: AboutproductsComponent},     //child/nested routing
   ] 
  },       
  { path: 'courses', component: CoursesComponent }, 
  { path: 'lazyload', component: LazyLoadingComponent }, 
  { path:  'lazyload/admin', 
  loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},  //lazy-loading
  { path:  'lazyload/user', 
  loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},  //lazy-loading    
  { path: '**', component: NopagefoundComponent },    //This should be always in last so that the We can access the valid URL's and neglect invalid
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)    //Importing this to register "approute" in application
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
