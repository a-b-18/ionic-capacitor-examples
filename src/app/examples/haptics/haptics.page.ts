import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-haptics',
  templateUrl: './haptics.page.html',
  styleUrls: ['./haptics.page.scss'],
})
export class HapticsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testImpactMedium() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  async testImpactLight() {
    await Haptics.impact({ style: ImpactStyle.Light });
  };

  async testVibrate() {
    await Haptics.vibrate();
  };

  async testSelectionStart() {
    await Haptics.selectionStart();
  };

  async testSelectionChanged() {
    await Haptics.selectionChanged();
  };

  async testSelectionEnd() {
    await Haptics.selectionEnd();
  };

}
