import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient  ) { }

    baseUrl="http://localhost:3004/";

    getproducts(){
      return this.http.get(this.baseUrl+"products/");
    }

    getproduct(id:number){
      return this.http.get(this.baseUrl+"products/"+id);
    }

    getproductsfromFSAPI(){
      return this.http.get("https://fakestoreapi.com/products?limit=10")
    }
}
