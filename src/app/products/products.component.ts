import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;

  ngOnInit(): void {

    this.getallproducts();

    // this.ar.queryParamMap.subscribe((qp)=> {
    // console.log(qp)
    //     const category = qp.get('category')
    //     if(category){
    //       this.products = this.allproducts.filter(
    //         (p:any) =>{  p.category=category  }
    //       )  }
    //     else{
    //       this.products=this.allproducts;  }
    //   })

    this.ar.queryParamMap.subscribe((qp) => {
      console.log(qp)
      let category = qp.get('category')
      let type = qp.get('type')
      if (category || type) {
        this.products = this.ps.lists.filter(
          (p: any) => { return (p.category == category || p.type == type) }
        )
      }
      else {
        this.products = this.ps.lists;
      }
    })
  }

  constructor(private ar: ActivatedRoute,
    private ps: ProductService,
    private route: Router,
    private api: ApiserviceService) { }

  allproducts: any;
  getallproducts() {
    this.api.getproducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allproducts = res;
      },
      error: (err) => { alert("Error While Fetching the data") }
    })
  }

  navigate() {   //Navigating without URL
    this.route.navigate(['/products'], {
      queryParams: { "category": "anime" }
    })
  }

}
