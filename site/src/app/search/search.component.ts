import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ListcardComponent } from '../listcard/listcard.component';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, FormsModule, ListcardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  SeachProduct: ProductInterface [] =[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {};

  ngOnInit() {
    // Lấy thông tin từ URL
    this.route.queryParams.subscribe((params) => {
        this.productService.SearchProduct(params['name']).subscribe((data) => {
            this.SeachProduct = data;
        });
    });
  }
}
