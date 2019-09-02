import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AsideMenuService {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  show() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('aside-menu-active');
    }
  }

  hide() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('aside-menu-active');
    }
  }
}
