import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sobrenombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onRegisterSubmit(): void {
    const newUser = {
      nombreU: this.registerForm.value.nombre,
      apellidoU: this.registerForm.value.apellido,
      sobrenombreU: this.registerForm.value.sobrenombre,
      correoU: this.registerForm.value.correo,
      contraseñaU: this.registerForm.value.contraseña,
      direccionU: this.registerForm.value.direccion
    };
    this.authService.register(newUser).subscribe(
      response => {
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al registrar usuario', error);
      }
    );
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
