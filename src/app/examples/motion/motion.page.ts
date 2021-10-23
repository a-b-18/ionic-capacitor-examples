import { Component, OnInit } from '@angular/core';
import { AccelListenerEvent, Motion } from '@capacitor/motion';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
})
export class MotionPage implements OnInit {
  xAcc: string;
  yAcc: string;
  zAcc: string;

  constructor() { }

  ngOnInit() {
  }

  async testMotion(){
      Motion.addListener('accel', event => {
        console.log('Device motion event:', event);
        if (event.acceleration.x > 10) {this.xAcc = 'left';};
        if (event.acceleration.x < -10) {this.xAcc = 'right';};
        if (event.acceleration.y > 10) {this.yAcc = 'down';};
        if (event.acceleration.y < -10) {this.yAcc = 'up';};
        if (event.acceleration.z > 10) {this.zAcc = 'backward';};
        if (event.acceleration.z < -10) {this.zAcc = 'forward';};
      });
    };
  }
