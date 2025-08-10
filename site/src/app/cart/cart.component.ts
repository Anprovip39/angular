import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { ProductInterface } from '../product-interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent{
  cart: any = [];
  cartPro:ProductInterface[] = []
  cartService = inject(CartService);
  form =  new FormGroup({
    voucher: new FormControl()
  })
  couponCode: string = '';
  couponMessage: string = '';
  discountAmount: number = 0;
  priceSale:number= 0;
  
  ngOnInit(): void {
    this.cart = this.cartService.GetCart();
  }
  SumMoney() :number{
    return this.cartService.GetSumMoney();
  }
  DeletePro(id: string) {
    this.cartService.RemoveCart(id); // Gọi service để xóa sản phẩm
    this.cart = this.cartService.GetCart(); // Cập nhật giỏ hàng sau khi xóa
  }
}
