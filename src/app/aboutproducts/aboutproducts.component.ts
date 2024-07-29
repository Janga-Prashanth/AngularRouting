import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-aboutproducts',
  templateUrl: './aboutproducts.component.html',
  styleUrls: ['./aboutproducts.component.scss']
})
export class AboutproductsComponent implements OnInit{

  constructor(private api:ApiserviceService,
               private route:ActivatedRoute){ }
               
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
      console.log(id)

    this.route.paramMap.subscribe(
      param=>{
        let nam=param.get("id");
        // console.log(+param.get("id"))
        this.getproduct(nam)
      }
    )
  }

  product:any;
  getproduct(id : any) {
    this.api.getproduct(id).subscribe((data : any) =>{
    this.product = data;
    } )
  }

}
