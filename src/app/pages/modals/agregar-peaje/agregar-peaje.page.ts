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

  peaje: Peaje;
  tiposVehiculos: TypeTollVehicle[];
  constructor(private ttvService: TipoVehiculoPeajesService) { }

  ngOnInit() {

    this.ttvService.getTipoVehiculosPeaje()
      .subscribe(rpt => {
        console.log(rpt);
        this.tiposVehiculos.push(...rpt.data);
      });

  }

  agregarPeaje(mdlAgregarPeaje: NgForm) {

  }

}
