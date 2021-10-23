import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testDeviceInfo() {
    const info = await Device.getInfo();

    console.log(info);
  };

  async testBatteryInfo() {
    const info = await Device.getBatteryInfo();

    console.log(info);
  };

}
