import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/interfaces';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage implements OnInit {

  user: User = {};

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.get('user').then(res => {
      this.user = res;
    });
  }

  cerrarSesion() {

  }
}
