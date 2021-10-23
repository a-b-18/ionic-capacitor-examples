import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testSplashScreen(){
    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    });
  }
}
