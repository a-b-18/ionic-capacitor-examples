import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.page.html',
  styleUrls: ['./filesystem.page.scss'],
})
export class FilesystemPage implements OnInit {

  filePath = 'insert file path here.';

  constructor() { }

  ngOnInit() {
  }

  async testWriteSecretFile() {
    await Filesystem.writeFile({
      path: 'secrets/text.txt',
      data: "This is a test",
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  };

  async testReadSecretFile() {
    const contents = await Filesystem.readFile({
      path: 'secrets/text.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    console.log('secrets:', contents);
  };

  async testDeleteSecretFile() {
    await Filesystem.deleteFile({
      path: 'secrets/text.txt',
      directory: Directory.Documents,
    });
  };

  async testReadFilePath() {
    // Here's an example of reading a file with a full file path. Use this to
    // read binary data (base64 encoded) from plugins that return File URIs, such as
    // the Camera.

    console.log('Reading from:', this.filePath);
    const contents = await Filesystem.readFile({
      path: this.filePath
    });

    console.log('data:', contents);
  };

}
