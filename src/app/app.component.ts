import {AfterViewInit, Component, NgZone} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private zone: NgZone,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.initializeDeepLinkingURIScheme();
    });
  }

// When app start with fluster://something
  // Handle URL scheme for Spotify connect too
  private initializeDeepLinkingURIScheme() {
    // https://github.com/EddyVerbruggen/Custom-URL-scheme/issues/227
    (window as any).handleOpenURL = (url: string) => {
      this.zone.run(() => {
        alert('YOLO ' + url);
      });
    };
  }
}
