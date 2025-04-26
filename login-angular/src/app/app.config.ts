import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig = [
  importProvidersFrom(RouterModule.forRoot(routes)), // Configurar rutas
  importProvidersFrom(ReactiveFormsModule, FormsModule), // Formularios reactivos y básicos
  provideHttpClient(), // Cliente HTTP
  provideAnimations() // Animaciones
];
