import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api/producto';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
