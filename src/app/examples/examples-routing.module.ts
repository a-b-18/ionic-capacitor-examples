import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesPage } from './examples.page';

const routes: Routes = [
  {
    path: '',
    component: ExamplesPage
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },
  {
    path: 'app-launcher',
    loadChildren: () => import('./app-launcher/app-launcher.module').then( m => m.AppLauncherPageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./browser/browser.module').then( m => m.BrowserPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () => import('./clipboard/clipboard.module').then( m => m.ClipboardPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./dialog/dialog.module').then( m => m.DialogPageModule)
  },
  {
    path: 'filesystem',
    loadChildren: () => import('./filesystem/filesystem.module').then( m => m.FilesystemPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'haptics',
    loadChildren: () => import('./haptics/haptics.module').then( m => m.HapticsPageModule)
  },
  {
    path: 'keyboard',
    loadChildren: () => import('./keyboard/keyboard.module').then( m => m.KeyboardPageModule)
  },
  {
    path: 'motion',
    loadChildren: () => import('./motion/motion.module').then( m => m.MotionPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'push-notifications',
    loadChildren: () => import('./push-notifications/push-notifications.module').then( m => m.PushNotificationsPageModule)
  },
  {
    path: 'screen-reader',
    loadChildren: () => import('./screen-reader/screen-reader.module').then( m => m.ScreenReaderPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'status-bar',
    loadChildren: () => import('./status-bar/status-bar.module').then( m => m.StatusBarPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'text-zoom',
    loadChildren: () => import('./text-zoom/text-zoom.module').then( m => m.TextZoomPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'local-notifications',
    loadChildren: () => import('./local-notifications/local-notifications.module').then( m => m.LocalNotificationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesPageRoutingModule {}
