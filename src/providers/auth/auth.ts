import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../../models/usuario-model';


@Injectable()
export class AuthProvider {
  currentUser: UsuarioModel;
  constructor() {
    this.currentUser = new UsuarioModel();
  }

  login(usuario: string, clave: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (usuario === 'j' && clave === '1') {
        this.currentUser.id = 1;
        this.currentUser.nombre = 'jhon medina';
        this.currentUser.tipoUsuario = 1;
        
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  isLoggedIn(){
    return this.currentUser != null;
  }

  logout(){
    this.currentUser = null;
  }

  isRemitente(){
    return this.currentUser.tipoUsuario === 1;
  }
}
