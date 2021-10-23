import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.page.html',
  styleUrls: ['./status-bar.page.scss'],
})
export class StatusBarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testTapListener(){
    // iOS only
    window.addEventListener('statusTap', () => {
      console.log('statusbar tapped');
    });
  }

  testIosOverlay(){
    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({ overlay: true });
  }

  async testDarkBar(){
    await StatusBar.setStyle({ style: Style.Dark });
  }

  async testLightBar(){
    await StatusBar.setStyle({ style: Style.Light });
  }

  async testHideBar(){
    await StatusBar.hide();
  }

  async testShowBar(){
    await StatusBar.show();
  }
}
