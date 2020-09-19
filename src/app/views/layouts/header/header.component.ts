import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '@core/configs/constants';
import { AuthService } from '@core/services/auth.service';
import { LocalStorageService } from '@core/services/local-storage.service';
import { TitleService } from '@core/services/title.service';
import { AsideMenuService } from '../aside-menu/aside-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapseMenu: boolean;

  constructor(public auth: AuthService,
              public titleService: TitleService,
              public asideMenuService: AsideMenuService,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService,
              private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
      this.collapseMenu = !!this.localStorageService.getItem('aside-menu-collapse');
    }
  }

  ngOnInit() {
  }

  async onSignOut() {
    await this.auth.purgeAuth();
    await this.afterSignOut();
  }

  private afterSignOut() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    return this.router.navigate([Constants.loginUrl]);
  }


}
