import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testToast() {
    await Toast.show({
      text: 'Hello!',
    });
  };

}
