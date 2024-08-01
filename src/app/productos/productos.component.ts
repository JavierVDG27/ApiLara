import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private authService: AuthService, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        if (Array.isArray(data)) {
          this.productos = data;
        } else {
          console.error('Error: La respuesta no contiene el campo esperado "products".');
        }
      },
      (error: any) => {
        console.error('Error fetching products', error);
      }
    );
  }

  filterProducts(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    this.productos = this.productos.filter(producto => producto.nombre.toLowerCase().includes(searchTerm));
  }

  editProduct(id: number): void {
    console.log(`Edit product ${id}`);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      (response: any) => {
        console.log(`Product ${id} deleted`);
        this.fetchProducts();
      },
      (error: any) => {
        console.error('Error deleting product', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
