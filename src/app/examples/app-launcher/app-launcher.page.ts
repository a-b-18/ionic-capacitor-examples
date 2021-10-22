import { Component, OnInit } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';

const checkCanOpenUrl = async () => {
  const { value } = await AppLauncher.canOpenUrl({ url: 'io.ionic.starter' });

  alert('Can open url: ' + value);
};

@Component({
  selector: 'app-app-launcher',
  templateUrl: './app-launcher.page.html',
  styleUrls: ['./app-launcher.page.scss'],
})
export class AppLauncherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testAppLauncher() {
    await AppLauncher.openUrl({ url: 'io.ionic.starter://examples/app-launcher' });
  };

}
