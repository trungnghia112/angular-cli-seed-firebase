import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { NotifyService } from './services/notify.service';
import { ApiService } from './services/api.service';
import { LogService } from './services/log.service';
import { LocalStorageService } from './services/local-storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    LocalStorageService,
    LogService,
    NotifyService
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
