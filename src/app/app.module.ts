import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreAppModule } from '@core/core.module';
import { ErrorPageComponent } from '@pages/error-page/error-page.component';
import { PagesComponent } from '@pages/pages.component';
import { PartialsModule } from '@partials/partials.module';
import { SharedAppModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { LayoutsModule } from './views/layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    CoreAppModule,
    SharedAppModule,
    LayoutsModule,
    PartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
