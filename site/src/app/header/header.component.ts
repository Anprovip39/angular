import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Từ khóa tìm kiếm
  keyword: string = '';

  constructor(private router: Router, public cartService: CartService) {}

  // Hàm khi người dùng nhấn nút tìm kiếm
  OnSearch() {
      if (!this.keyword.trim()) {
          return;
      }

      // Chuyển sang trang tìm kiếm, kèm query param ?name=...
      this.router.navigate(['/search'], { queryParams: { name: this.keyword } });
  }
}

