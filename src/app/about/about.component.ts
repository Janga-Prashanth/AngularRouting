import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

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

  constructor(private api:ApiserviceService){}

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
