import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;

  constructor(private http: HttpClient,
              private storage: Storage) { }

  login(email: string, password: string) {

    const data = { email, password };

    return new Promise(resolve => {

      this.http.post(`${URL}/api/v1/auth/login`, data)
        .subscribe(async resp => {
          console.log(resp);
          if (resp.data.ok) {
            await this.saveToken(resp.data.access_token);
            resolve(true);
          }
          if (resp.data.ok) {
            this.token = null;
            await this.storage.clear();
            resolve(false);
          }
        });

    });

  }

  async saveToken(token: string) {

    this.token = token;
    await this.storage.set('token', token);

  }


}
