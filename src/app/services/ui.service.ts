import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor(private alertCtrl: AlertController) { }

  async presentAlert(sub:string, msg:string) {
    const alert = await this.alertCtrl.create({
      header: 'PMT EL Estor',
      subHeader: sub,
      message: msg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
