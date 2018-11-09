import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Servicio } from '../../models/servicio-model';

@Injectable()
export class RestServicesProvider {

  //Url de los servicios
  urlService: string = 'http://192.168.0.19:3000';
  headers = new HttpHeaders();
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {
  }

  //Crear nuevo servicio
  createServicio(data) {
    return this.http.put(this.urlService + '/operaciones-microservice/servicios', JSON.stringify(data),
        { headers: this.httpHeader });
  
  }

  //Traer lista de servicios
  getServiciosByRemitente(id: Number): Observable<Servicio[]>{
    return this.http.get(this.urlService + '/operaciones-microservice/servicios/remitentes/' + id)
    .pipe(
      map(response => response['response'].data as Servicio[])
    );
  }

  //Traer lista de servicios transportista
  getServiciosByTransportista(id: Number): Observable<Servicio[]>{
    console.log('Servicio id ='  + id )
    return this.http.get(this.urlService + '/operaciones-microservice/servicios/transportista/' + id)
    .pipe(
      map(response => response['response'].data as Servicio[]),      
    );
  }

  //Lista de servicios por estado
  getServiciosByEstado(id:Number): Observable<Servicio[]>{
    return this.http.get(this.urlService + '/operaciones-microservice/servicios/estados/' + id)
    .pipe(
      map(response => response['response'].data as Servicio[])
    );
  }

  //Actualizar estado de servicio
  updateServicio(id:Number, estado:Number, servicio: string){
    return this.http.put(this.urlService + '/operaciones-microservice/servicios/' + servicio + '/estados/' + estado, { "id_transportista": id}  , { headers: this.httpHeader });
  }
}
