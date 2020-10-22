import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinningPageRoutingModule } from './winning-routing.module';

import { WinningPage } from './winning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinningPageRoutingModule
  ],
  declarations: [WinningPage]
})
export class WinningPageModule {}
