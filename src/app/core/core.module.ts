import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { LocalStorageService } from './services/local-storage.service';
import { LogService } from './services/log.service';
import { NotifyService } from './services/notify.service';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    LocalStorageService,
    LogService,
    NotifyService,
    httpInterceptorProviders,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class CoreAppModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreAppModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
