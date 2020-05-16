import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicePage } from './device.page';

const routes: Routes = [
  {
    path: '',
    component: DevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicePageRoutingModule {}
