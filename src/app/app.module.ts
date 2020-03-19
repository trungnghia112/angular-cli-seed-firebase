import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreAppModule } from '@core/core.module';
import { environment } from '@env/environment';
import { ErrorPageComponent } from '@pages/error-page/error-page.component';
import { PagesComponent } from '@pages/pages.component';
import { PartialsModule } from '@partials/partials.module';
import { SharedAppModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './views/layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    CoreAppModule,
    SharedAppModule,
    LayoutsModule,
    PartialsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
