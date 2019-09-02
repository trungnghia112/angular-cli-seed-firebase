import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '@core/configs/constants';
import { AuthService } from '@core/services/auth.service';
import { TitleService } from '@core/services/title.service';
import { AsideMenuService } from '../aside-menu/aside-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService,
              public titleService: TitleService,
              public asideMenuService: AsideMenuService,
              private router: Router) {
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
