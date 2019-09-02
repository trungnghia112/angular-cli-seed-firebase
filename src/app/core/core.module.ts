import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    httpInterceptorProviders,
    ConfirmationService,
    MessageService
  ],
  exports: [
    ToastModule,
    ConfirmDialogModule
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
