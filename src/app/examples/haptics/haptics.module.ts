import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HapticsPageRoutingModule } from './haptics-routing.module';

import { HapticsPage } from './haptics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HapticsPageRoutingModule
  ],
  declarations: [HapticsPage]
})
export class HapticsPageModule {}
