import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  clipboardWrite = 'insert text here';

  constructor() { }

  ngOnInit() {
  }

  async testClipboardWrite() {
    console.log(this.clipboardWrite);
    await Clipboard.write({
      string: this.clipboardWrite
    });
  };

  async testClipboardRead() {
    const { type, value } = await Clipboard.read();

    alert(`Got ${type} from clipboard: ${value}`);
  };

}
