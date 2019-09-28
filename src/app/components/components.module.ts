import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPeajesComponent } from './my_peajes/my_peajes.component';
import { PeajeComponent } from './peaje/peaje.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MyPeajesComponent,
    PeajeComponent
  ],
  exports: [
    MyPeajesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
