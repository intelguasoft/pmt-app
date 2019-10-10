import { Component, OnInit } from '@angular/core';
import { PeajesService } from '../../services/peajes.service';
import { Peaje } from 'src/app/interfaces/interfaces';
import { AlertController, ModalController } from '@ionic/angular';
import { AgregarPeajePage } from '../modals/agregar-peaje/agregar-peaje.page';

@Component({
  selector: 'app-peajes',
  templateUrl: 'peajes.page.html',
  styleUrls: ['peajes.page.scss']
})
export class PeajesPage implements OnInit {

  peajes: Peaje[] = [];
  habilitado = true;
  inicial: boolean = false;

  constructor(private peajesService: PeajesService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    // console.log(this.peajes);
    this.cargarData();
    this.refrescar(null);
    if (this.inicial) {
      this.peajesService.nuevoPeaje
      .subscribe(peaje => {
        this.peajes.unshift(peaje);
      });
    }
  }

  refrescar(event) {
    this.cargarData(event, true);
    this.habilitado = true;
    this.peajes = [];
  }

  cargarData(event?, pull: boolean = false)
  {

    this.peajesService.getPeajes( pull )
      .subscribe(rpt => {
        this.peajes.push(...rpt.data.data);
        console.log(this.peajes);

        if (event) {
          event.target.complete();
          if (rpt.data.data.length === 0) {
            this.habilitado = false;
          }
        }
      });

  }

  async modalAgregarPeaje() {
    const peajeModal = await this.modalCtrl.create({
      component: AgregarPeajePage,
      componentProps: {}
    });

    await peajeModal.present();
  }


}
