import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000/api'; // URL de tu API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/producto`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/producto/${id}`);
  }
}
