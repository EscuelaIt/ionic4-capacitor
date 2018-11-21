import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
  ) {
    SplashScreen.hide()
    .catch(error => {
      console.log(error);
    });
    StatusBar.hide()
    .catch(error => {
      console.log(error);
    });
  }
}
