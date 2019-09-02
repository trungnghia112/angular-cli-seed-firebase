import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedAppModule } from '@shared/shared.module';
import { PartialsModule } from '@partials/partials.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [PagesComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedAppModule,
    PartialsModule,
    LayoutsModule
  ]
})
export class PagesModule {
}
