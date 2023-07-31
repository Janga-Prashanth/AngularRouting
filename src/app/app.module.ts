import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';    //maincomponent
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';       //to enable routing 
import { HomeComponent } from './home/home.component';   //routing
import { AboutComponent } from './about/about.component';      //routing
import { ContactComponent } from './contact/contact.component';   //route parameters
import { ContactlistComponent } from './contactlist/contactlist.component';   //route parameters
import { CoursesComponent } from './courses/courses.component';    //to enable routing
import { HttpClientModule } from '@angular/common/http';   ////to get response from http server
import { HttpreqComponent } from './httpreq/httpreq.component';    //http requests
import { NopagefoundComponent } from './nopagefound/nopagefound.component';   //routing
import { ProductsComponent } from './products/products.component';
import { AboutproductsComponent } from './aboutproducts/aboutproducts.component';    //routing
import { ApiserviceService } from './services/apiservice.service';
import { ProductService } from './services/product.service';


const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },    //Used to redirect the path to another component
  { path: 'home', component: HomeComponent },            //Default component Route(Landing Page) 
  { path: 'contact', component: ContactComponent },     //Route-Paramaters
  { path: 'contact/contactlist/:id', component: ContactlistComponent },     //Route-Paramaters
  { path: 'products', component: ProductsComponent },      //Query_Parameters
  { path: 'about', component: AboutComponent,              //child/nested routing
   children: [ 
    {path: 'aboutproduct/:id', component: AboutproductsComponent},     //child/nested routing
   ] 
  },       
  { path: 'courses', component: CoursesComponent },
  { path: 'httpreq', component: HttpreqComponent },         //http requests
  { path: '**', component: NopagefoundComponent },    //This should be always in last so that the We can access the valid URL's and neglect invalid
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    ProductsComponent,
    ContactlistComponent,
    NopagefoundComponent,
    HttpreqComponent,
    AboutproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),  //Importing this to register "approute" in aplication
    HttpClientModule,   //to handle http requests
  ],
  providers: [ApiserviceService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }