import { Component, OnInit } from '@angular/core';
import { ScreenReader } from '@capacitor/screen-reader';

@Component({
  selector: 'app-screen-reader',
  templateUrl: './screen-reader.page.html',
  styleUrls: ['./screen-reader.page.scss'],
})
export class ScreenReaderPage implements OnInit {

  stateChange: any = 'screenReaderStateChange';

  constructor() { }

  ngOnInit() {
  }

  testScreenReader() {
    ScreenReader.addListener(this.stateChange, ({ value }) => {
      console.log(`Screen reader is now ${value ? 'on' : 'off'}`);
    });
  }

  async checkScreenReader() {
    const { value } = await ScreenReader.isEnabled();

    alert('Voice over enabled? ' + value);
  };

  async testSpeech() {
    await ScreenReader.speak({ value: 'Hello World!' });
  };
}
