import { Component } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ListcardComponent } from "../listcard/listcard.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ListcardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  AllProducts: ProductInterface[] = [];
  HotProducts: ProductInterface [] = [];
  InProducts: ProductInterface [] = [];
  OutProducts: ProductInterface [] = [];
  SortedList: ProductInterface[] = [];
  SortOder: string = '';
  constructor(private ProductService: ProductService) {}

  ngOnInit() {
    this.ProductService.GetAllHot().subscribe((data) =>{
      this.HotProducts = data;
    });
    this.ProductService.GetAllIn().subscribe((data) =>{
      this.InProducts = data;
    });
    this.ProductService.GetAllOut().subscribe((data) =>{
      this.OutProducts = data;
    });
    this.ProductService.GetAllPro().subscribe((data) => {
      this.AllProducts = data;
      this.SortedList = data;
      console.log(this.AllProducts);
    });
  }
  SortProducts() {
    if (this.SortOder === 'asc') {
      this.SortedList = [...this.AllProducts].sort((a, b) => a.price - b.price);
    } else if (this.SortOder === 'desc') {
      this.SortedList = [...this.AllProducts].sort((a, b) => b.price - a.price);
    } else {
      // Sắp xếp ngẫu nhiên
      this.SortedList = [...this.AllProducts].sort(() => Math.random() - 0.5);
    }
  }
}


