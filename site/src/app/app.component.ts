import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, FooterComponent], // Thêm CommonModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router: Router) {}

  // Kiểm tra nếu URL chứa "/signup" thì ẩn header/footer
  isRegisterPage(): boolean {
    return this.router.url.startsWith('/signup');
  }
}
