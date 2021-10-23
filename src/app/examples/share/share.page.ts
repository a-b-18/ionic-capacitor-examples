import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async testShare() {
    await Share.share({
      title: 'Share something',
      text: 'Choose from the below options to share some stuff.',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

}
