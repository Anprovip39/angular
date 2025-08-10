import { Component, Input } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listcard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listcard.component.html',
  styleUrl: './listcard.component.css'
})
export class ListcardComponent {
  @Input() title="";
  @Input() data: ProductInterface[]=[];
  ProductDetail!: ProductInterface;
  cart: any = [];
  constructor(
    private cartService: CartService
  ) {}; 
  ngOnInit(): void {
    this.cart = this.cartService.GetCart();
  }
  // AddCart(): void {
  //   this.cartService.AddCart(this.ProductDetail,);
  //   console.log(this.cartService.GetCartLength())
  // }
}
