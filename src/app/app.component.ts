import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { stepper } from '@core/animations/route-animations';
import { AuthService } from '@core/services/auth.service';
import { TitleService } from '@core/services/title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cli-seed';

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private updates: SwUpdate,
    private auth: AuthService,
    private router: Router,
    private titleService: TitleService,
    private translateService: TranslateService
  ) {
    this.updates.available.subscribe(() => {
      if (confirm('New version available. Load New Version?')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('en');
  }

  ngOnInit() {
    this.auth.populate();

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator

        this.titleService.setMetaTitle(
          this.router.routerState.snapshot.root,
          this.translateService
        );

        if (isPlatformBrowser(this.platformId)) {
          document.body.scrollTop = 0;
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
}
