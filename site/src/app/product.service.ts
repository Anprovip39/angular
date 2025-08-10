import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from './product-interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  GetAllPro(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>('http://localhost:3000/products')
  }
  GetAllHot(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>('http://localhost:3000/products?hot=1&limit=4')
  }
  GetAllIn(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>('http://localhost:3000/products?idcate=6771564e018cfe84b15c6b42&limit=4')
  }
  GetAllOut(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>('http://localhost:3000/products?idcate=67c59b0fb67ca3b56852178a&limit=4')
  }
  SearchProduct(keyword: string): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>(`http://localhost:3000/products?name=${keyword}`)
  }
  GetProductById(id: string): Observable<ProductInterface>{
    return this.http.get<ProductInterface>(`http://localhost:3000/products/${id}`)
  }
}
 