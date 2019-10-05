import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Peaje, TypeTollVehicle } from '../../../interfaces/interfaces';
import { TipoVehiculoPeajesService } from '../../../services/tipo-vehiculo-peajes.service';
import { PeajesService } from 'src/app/services/peajes.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-peaje',
  templateUrl: './agregar-peaje.page.html',
  styleUrls: ['./agregar-peaje.page.scss'],
})
export class AgregarPeajePage implements OnInit {

  peaje: Peaje = {
    date: this.datePipe.transform(new Date().toISOString(), 'yyyy-MM-dd'),
    time: this.datePipe.transform(new Date().toISOString(), 'hh:mm:ss'),
    type_toll_vehicle_id: 0,
    car_plate: '',
    user_id: null
  };

  idTipo = 0;
  prefijo: string = null;
  tipo: TypeTollVehicle;

  tiposVehiculos: TypeTollVehicle[] = [];
  constructor(private ttvService: TipoVehiculoPeajesService,
              private peajeService: PeajesService,
              private authService: AuthService,
              private datePipe: DatePipe,
              private router: Router,
              private modalCtrl: ModalController) { }

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

  async guardar() {
    const user = await this.authService.getUser();

    this.peaje.user_id = user.id;
    this.peaje.date = this.datePipe.transform(this.peaje.date, 'yyyy-MM-dd');

    await this.peajeService.savePeaje(this.peaje);

    this.peaje = {};
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('admin/peajes');
  }

  cancelarModal() {
    this.modalCtrl.dismiss();
  }

}
