import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user = {
    email: '',
    password: '',
    repass: '',
    confirmPassword:''
  };
  constructor(
    private UserService: UsersService,
    private router: Router
    ) {}
  selectedFile: File | null = null;
  submitted = false;
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0)
      this.selectedFile = input.files[0];
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    if (this.selectedFile) formData.append('img', this.selectedFile);
    formData.forEach((v, k) => console.log(k + ': ' + v));
    this.UserService.register(formData).subscribe({
      next: (response) => {
        console.log('Đăng ký thành công:', response);
        this.submitted = true;
      },
    });
        setTimeout(() => {
      this.router.navigate(['/products']); // Chuyển hướng đến trang đăng nhập
    }, 1500);  // Đợi 2 giây trước khi chuyển hướng
  }
}


    // setTimeout(() => {
    //   this.router.navigate(['/products']); // Chuyển hướng đến trang đăng nhập
    // }, 1500);  // Đợi 2 giây trước khi chuyển hướng