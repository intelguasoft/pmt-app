import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeajesPage } from './peajes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AgregarPeajePage } from '../modals/agregar-peaje/agregar-peaje.page';
import { AgregarPeajePageModule } from '../modals/agregar-peaje/agregar-peaje.module';

@NgModule({
  entryComponents: [
    AgregarPeajePage
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    AgregarPeajePageModule,
    RouterModule.forChild([{ path: '', component: PeajesPage }])
  ],
  declarations: [PeajesPage]
})
export class PeajesPageModule {}
