import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Peaje, TypeTollVehicle } from '../../../interfaces/interfaces';
import { TipoVehiculoPeajesService } from '../../../services/tipo-vehiculo-peajes.service';

@Component({
  selector: 'app-agregar-peaje',
  templateUrl: './agregar-peaje.page.html',
  styleUrls: ['./agregar-peaje.page.scss'],
})
export class AgregarPeajePage implements OnInit {

  peaje: Peaje = {
    date: new Date().toISOString(),
    time: new Date().toTimeString(),
    type_toll_vehicle_id: 0,
    car_plate: null
  };

  idTipo = 0;
  prefijo: string = null;
  tipo: TypeTollVehicle;

  tiposVehiculos: TypeTollVehicle[] = [];
  constructor(private ttvService: TipoVehiculoPeajesService) { }

  ngOnInit() {

    this.ttvService.getTipoVehiculosPeaje()
      .subscribe(rpt => {
        console.log(rpt);
        this.tiposVehiculos.push(...rpt.data);
      });

  }

  obtenerDato(event) {
    console.log(event.detail.value);
    this.ttvService.getTipoVehiculosPeajeById(event.detail.value)
      .subscribe(rpt => {
        this.tipo = rpt.data;
        this.prefijo = this.tipo.prefix_car_plate;
        console.log(this.tipo);
       });
  }

  agregarPeaje(mdlAgregarPeaje: NgForm) {

  }

  guardar() {
    console.log(this.peaje);
  }

}
