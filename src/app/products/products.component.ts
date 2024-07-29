import { Component, OnInit } from '@angular/core';
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

    this.getdata();
  }

  constructor(private ar: ActivatedRoute,
    private ps: ProductService,
    private route: Router) { }


    getdata(){
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

  navigate() {   
    this.route.navigate(['/products'], {
      queryParams: { "category": "anime" }
    })
  }
}
