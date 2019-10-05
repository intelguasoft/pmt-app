import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaPeajes, Peaje, RespuestaPeaje } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PeajesService {

  paginaPeaje = 0;

  nuevoPeaje = new EventEmitter<Peaje>();

  constructor(private http: HttpClient) { }

  getPeajes( pull: boolean = false ) {

    if (pull) {
      this.paginaPeaje = 0;
    }

    this.paginaPeaje++;

    return this.http.get<RespuestaPeajes>(`${URL}/api/v1/peaje/tolls?page=${this.paginaPeaje}`);

  }

  savePeaje(peaje: Peaje) {

    return new Promise(resolve => {

      this.http.post<RespuestaPeaje>(`${URL}/api/v1/peaje/tolls`, peaje)
        .subscribe((rpt) => {
          console.log(rpt);
          this.nuevoPeaje.emit(rpt.data);
          resolve(true);
        });

    });
  }
}
