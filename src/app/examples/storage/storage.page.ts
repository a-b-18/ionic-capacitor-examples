import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  testName: string;
  constructor() { }

  ngOnInit() {
  }

  async testSetName() {
    await Storage.set({
      key: 'name',
      value: this.testName,
    });
  };

  async testCheckName() {
    const { value } = await Storage.get({ key: 'name' });

    alert(`Hello ${value}!`);
  };

  async testRemoveName() {
    await Storage.remove({ key: 'name' });
  };

}
