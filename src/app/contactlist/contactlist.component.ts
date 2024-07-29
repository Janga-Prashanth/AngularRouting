import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   //to get the id from URL
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent {

  urlid:any;   //to store the id value from URL
  service: any;    //to store the id value from services

  constructor(private aroute:ActivatedRoute,
     private ps:ProductService){}

  // ActivedRoute is used to get the currently activated route by "id" value

  ngOnInit(): void{
    this.urlid= this.aroute.snapshot.paramMap.get('id');      //getting the "id" value from URL
    // this.productid= this.aroute.snapshot.params['id'];   //this is the old approach
    this.service= this.ps.products.find(x=>x.id == this.urlid);       //getting the "id" value from services and equating it.
  }

}
