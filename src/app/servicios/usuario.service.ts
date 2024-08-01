import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8000/api/usuarios'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
