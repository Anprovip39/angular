import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  register(formData: FormData): Observable<UserInterface> {
    return this.http.post<UserInterface>(
      'http://localhost:3000/users/register',
      formData
    );
  }
}
