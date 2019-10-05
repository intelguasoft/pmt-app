import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaTipoVeniculoPeaje, RespuestaTipoVeniculoPeajeId } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoPeajesService {

  constructor(private http: HttpClient) { }

  getTipoVehiculosPeaje() {
    return this.http.get<RespuestaTipoVeniculoPeaje>(`${URL}/api/v1/peaje/type-toll-vehicles`);
  }

  getTipoVehiculosPeajeById(id: number) {
    return this.http.get<RespuestaTipoVeniculoPeajeId>(`${URL}/api/v1/peaje/type-toll-vehicles/${id}`);
  }
}
