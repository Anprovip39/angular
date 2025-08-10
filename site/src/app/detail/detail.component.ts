import { Component } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // Lấy 1 sản phẩm từ product service
  ProductDetail!: ProductInterface; // !: không null

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.GetProductById(id!).subscribe((data) => {
      this.ProductDetail = data;
    });
  }

  AddCart(quantity: string): void {
    this.cartService.AddCart(this.ProductDetail, parseInt(quantity, 10));
    console.log(this.cartService.GetCartLength())
  }
}
