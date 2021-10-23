import { Component, OnInit } from '@angular/core';
import { AccelListenerEvent, Motion } from '@capacitor/motion';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
})
export class MotionPage implements OnInit {
  xAcc: number;
  yAcc: number;
  zAcc: number;
  motionEvent: AccelListenerEvent;

  constructor() { }

  ngOnInit() {
  }

  async testMotion(){
      Motion.addListener('accel', event => {
        console.log('Device motion event:', event);
        this.motionEvent = event;
      });
      this.xAcc = this.motionEvent.acceleration.x;
      this.yAcc = this.motionEvent.acceleration.y;
      this.zAcc = this.motionEvent.acceleration.z;
    };
  }
