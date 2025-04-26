import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule], // Importar ReactiveFormsModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      identificacion: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onRegister() {
    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        alert('✅ Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('❌ Error en el registro.');
      },
    });
  }
}
