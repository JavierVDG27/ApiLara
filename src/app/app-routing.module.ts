import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'crearProducto', component: CrearProductoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
