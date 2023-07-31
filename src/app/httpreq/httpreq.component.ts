import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httpreq',
  templateUrl: './httpreq.component.html',
  styleUrls: ['./httpreq.component.scss']
})
export class HttpreqComponent {

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getdata();
  }

  tpdata:any;

  getdata(){
    this.http.get("https://fakestoreapi.com/products?limit=5").subscribe((res) => {
        this.tpdata = res;
      } );
  }

}
