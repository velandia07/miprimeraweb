import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], // Importar ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: [''],
      password: [''],
    });
  }

  iniciarSesion() {
    const datos = this.loginForm.value;

    this.authService.login(datos).subscribe({
      next: (res) => {
        alert('✅ Login exitoso');
        window.location.href = 'http://localhost:3000/frontend/crear-torta.html';
      },
      error: () => {
        alert('❌ Usuario o contraseña incorrectos');
      },
    });
  }
}
