import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Action Sheet', url: '/examples/action-sheet', icon: 'bookmark' },
    { title: 'App', url: '/examples/app', icon: 'bookmark' },
    { title: 'App Launcher', url: '/examples/app-launcher', icon: 'bookmark' },
    { title: 'Browser', url: '/examples/browser', icon: 'bookmark' },
    { title: 'Camera', url: '/examples/camera', icon: 'bookmark' },
    { title: 'Clipboard', url: '/examples/clipboard', icon: 'bookmark' },
    { title: 'Device', url: '/examples/device', icon: 'bookmark' },
    { title: 'Dialog', url: '/examples/dialog', icon: 'bookmark' },
    { title: 'Filesystem', url: '/examples/filesystem', icon: 'bookmark' },
    { title: 'Geolocation', url: '/examples/geolocation', icon: 'bookmark' },
    { title: 'Haptics', url: '/examples/haptics', icon: 'bookmark' },
    { title: 'Keyboard', url: '/examples/keyboard', icon: 'bookmark' },
    { title: 'Local Notifications', url: '/examples/local-notifications', icon: 'bookmark' },
    { title: 'Motion', url: '/examples/motion', icon: 'bookmark' },
    { title: 'Network', url: '/examples/network', icon: 'bookmark' },
    { title: 'Push Notifications', url: '/examples/push-notifications', icon: 'bookmark' },
    { title: 'Screen Reader', url: '/examples/screen-reader', icon: 'bookmark' },
    { title: 'Share', url: '/examples/share', icon: 'bookmark' },
    { title: 'Splash Screen', url: '/examples/splash-screen', icon: 'bookmark' },
    { title: 'Status Bar', url: '/examples/status-bar', icon: 'bookmark' },
    { title: 'Storage', url: '/examples/storage', icon: 'bookmark' },
    { title: 'Text Zoom', url: '/examples/text-zoom', icon: 'bookmark' },
    { title: 'Toast', url: '/examples/toast', icon: 'bookmark' }
  ];
  constructor() {}
}
