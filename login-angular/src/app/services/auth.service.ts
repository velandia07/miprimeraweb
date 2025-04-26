import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // URL base de tu backend

  constructor(private http: HttpClient) {}

  // Método para el registro de usuarios
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, data);
  }

  // Método para el login de usuarios
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
