import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {XsegundoService} from './reloj1.service';
import { BLE } from '@ionic-native/ble/ngx';
import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPageRoutingModule
  ],
  providers: [
    BLE,
    XsegundoService],
  declarations: [StartPage]
})
export class StartPageModule {}
