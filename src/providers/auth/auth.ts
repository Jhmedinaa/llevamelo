import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../../models/usuario-model';


@Injectable()
export class AuthProvider {
  //Url de los servicios
  urlService: string = 'http://10.161.57.48:3000';
  headers = new HttpHeaders();
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  currentUser: UsuarioModel;

  constructor(public http: HttpClient) {
    this.currentUser = new UsuarioModel();
  }

  login(usuario: string, clave: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.urlService + '/terceros-microservice/terceros', { "login": usuario, "password": clave }, { headers: this.httpHeader })
        .subscribe(data => {
          if (!data['isError']) {
            this.currentUser.id = data['response'].data.id;
            this.currentUser.nombre = data['response'].data.nombre;
            this.currentUser.tipoUsuario = data['response'].data.tipo;

            resolve(true);
          } else {
            reject(false);
          }
        })
    });



    /*return new Promise((resolve, reject) => {
      if (usuario === 'j' && clave === '1') {
        this.currentUser.id = 1;
        this.currentUser.nombre = 'jhon medina';
        this.currentUser.tipoUsuario = 2;

        resolve(true);
      } else {
        reject(false);
      }
    });*/
  }

  isLoggedIn() {
    return this.currentUser != null;
  }

  logout() {
    this.currentUser = null;
  }

  isRemitente() {
    return this.currentUser.tipoUsuario == 1 ? true : false;
  }
}
