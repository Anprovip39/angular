import { Injectable } from '@angular/core';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cart: any = [];

  AddCart(product: ProductInterface, quantity: number) {
    const index = this.cart.findIndex((item: ProductInterface) => item._id === product._id);
    if (index === -1) {
      this.cart.push({ ...product, quantity });
    } else {
      this.cart[index].quantity += quantity;
    }
  }

  GetCart() {
    return this.cart;
  }

  GetCartLength() {
    let length = 0;
    for (let p of this.cart) {
      length += p.quantity;
    }
    return length;
  }

  GetSumMoney() {
    return this.cart.reduce((acc: number, item: any) => acc + item.sale * item.quantity, 0);
  }

  // 🛑 Hàm xóa sản phẩm khỏi giỏ hàng
  RemoveCart(id: string) {
    this.cart = this.cart.filter((item: ProductInterface) => item._id !== id);
  }
}
