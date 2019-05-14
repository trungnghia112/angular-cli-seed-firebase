import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppErrorHandler} from './error-handler/app-error-handler.service';
import {httpInterceptorProviders} from './http-interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    httpInterceptorProviders,
    {provide: ErrorHandler, useClass: AppErrorHandler}
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
