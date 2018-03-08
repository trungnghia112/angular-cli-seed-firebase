import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: []
})
export class CoreAppModule {
  constructor(@Optional()
              @SkipSelf()
                parentModule: CoreAppModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
