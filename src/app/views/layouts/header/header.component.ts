import { Component, OnInit } from '@angular/core';
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
              public asideMenuService: AsideMenuService) {
  }

  ngOnInit() {
  }

  async onSignOut() {
    await this.auth.signOut();
  }
}
