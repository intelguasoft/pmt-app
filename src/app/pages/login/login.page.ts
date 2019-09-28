import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'edgar@chub.com',
    password: '123456',
    remember: true
  };

  constructor(private authService: AuthService,
              private uiService: UIService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  async login(frmLogin: NgForm) {

    if (frmLogin.invalid) { return; }

    const valido = await this.authService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      // navegar al tab
      this.navCtrl.navigateRoot('admin/peajes', { animated: true });
    } else {
      // mostrar alerta de error
      this.uiService.presentAlert('Autenticación fallída', 'Usuario o contraseña incorrectos.');
    }

  }

}
