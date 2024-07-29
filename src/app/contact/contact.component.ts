import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private ps:ProductService,
    private route:Router){} 

  product= this.ps.products;

  id=4;
  
  navigate(){
    this.route.navigate(['/contact/contactlist/',this.id])
  }
}
