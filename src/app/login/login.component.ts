import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/productos']);
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error => {
        console.error('Error de autenticación', error);
      }
    );
  }
}
