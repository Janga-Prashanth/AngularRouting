import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-httpreq',
  templateUrl: './httpreq.component.html',
  styleUrls: ['./httpreq.component.scss']
})
export class HttpreqComponent {

  constructor(private http:HttpClient,
    private api: ApiserviceService
  ){}
  ngOnInit(): void {
    // this.getdata();
    this.getproductsfromFSAPI();
  }

  tpdata:any;

  // getdata(){
  //   this.http.get("https://fakestoreapi.com/products?limit=5").subscribe((res) => {
  //       this.tpdata = res;
  //     } );
  // }

  getproductsfromFSAPI(){
    this.api.getproductsfromFSAPI().subscribe({
      next : (res :any)=>{
        this.tpdata = res;
      },
      error: (err) => {alert("Error While Fetching the data")}
    } )
  }

}
