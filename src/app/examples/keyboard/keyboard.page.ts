import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.page.html',
  styleUrls: ['./keyboard.page.scss'],
})
export class KeyboardPage implements OnInit {

  testText = 'Test Keyboard here.';

  constructor() { }

  ngOnInit() {
  }

  testKeyboard() {
    Keyboard.addListener('keyboardWillShow', info => {
      console.log('keyboard will show with height:', info.keyboardHeight);
    });

    Keyboard.addListener('keyboardDidShow', info => {
      console.log('keyboard did show with height:', info.keyboardHeight);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });

    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard did hide');
    });
  }
}
