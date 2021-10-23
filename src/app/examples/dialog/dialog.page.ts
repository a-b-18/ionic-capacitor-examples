import { Component, OnInit } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
})
export class DialogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testAlert() {
    await Dialog.alert({
      title: 'Stop',
      message: 'this is an error',
    });
  };

  async testConfirm() {
    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Are you sure you'd like to press the red button?`,
    });

    console.log('Confirmed:', value);
  };

  async testPrompt() {
    const { value, cancelled } = await Dialog.prompt({
      title: 'Hello',
      message: `What's your name?`,
    });

    console.log('Name:', value);
    console.log('Cancelled:', cancelled);
  };

}
