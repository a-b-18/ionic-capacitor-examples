import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testNetwork() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });

    const logCurrentNetworkStatus = async () => {
      const status = await Network.getStatus();

      console.log('Network status:', status);
    };
  }

}
