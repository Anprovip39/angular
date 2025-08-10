import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  class = "WD19309";
  student = {
    name: 'Nguyễn Thế Gia An',
    age: '20',
    gender: 'Nam',
    img: 'assets/images/TIS_4298.JPG'
  }
}
