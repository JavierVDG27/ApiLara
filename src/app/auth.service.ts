import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlR = 'http://localhost:8000/api'; // URL de API
  private apiUrl = 'http://localhost:8000/api/usuario';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.correoU === email && u.contraseñaU === password);
        return !!user;
      }),
      catchError(error => {
        console.error('Error al autenticar', error);
        return of(false);
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrlR}/usuario`, user);
  }

  getUserName(): string {
    return 'Nombre del Usuario'; // Cambia esto para obtener el nombre real del usuario
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Usuario desconectado');
  }
}

