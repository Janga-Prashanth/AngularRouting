import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';    //maincomponent
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

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
    AboutproductsComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,   //to handle http requests
  ],
  providers: [ApiserviceService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }