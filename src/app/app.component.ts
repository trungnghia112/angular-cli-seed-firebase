import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { RouterOutlet } from '@angular/router';
import { stepper } from '@core/animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    // slider,
    // transformer,
    stepper
  ]
})
export class AppComponent {
  title = 'angular-cli-seed';

  constructor(updates: SwUpdate) {
    updates.available.subscribe(() => {
      if (confirm('New version available. Load New Version?')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
