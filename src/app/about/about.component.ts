import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  products:any;

  ngOnInit(): void {
    this.getallproducts();
  }

  constructor(private api:ApiserviceService,
     private ar: ActivatedRoute,
     private ps:ProductService){}

  allproducts:any;
  getallproducts(){
    this.api.getproducts().subscribe({
      next : (res :any)=>{
        this.allproducts = res;
      },
      error: (err) => {alert("Error While Fetching the data")}
    } )
  }

}
