import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  crearProductoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.crearProductoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      imagen: ['', Validators.required],
      estado: [true],  // Añade este campo si está definido en la base de datos
      stock: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const producto = this.crearProductoForm.value;
    console.log('Producto a enviar:', producto); // Para verificar los datos antes de enviar
    this.productService.createProduct(producto).subscribe(
      response => {
        console.log('Producto creado', response);
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error creando producto', error);
      }
    );
  }
}
