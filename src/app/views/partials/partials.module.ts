import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { WCountriesModule } from '@partials/general/w-countries/w-countries.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from 'primeng/dialog';

import { SharedAppModule } from '@shared/shared.module';
import { PartialsAvatarComponent } from './general/avatar/avatar.component';
import { PartialsBadgeStatusComponent } from './general/badge-status/badge-role.component';

const partialsComponent = [
  PartialsAvatarComponent,
  PartialsBadgeStatusComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedAppModule,
    NgbDropdownModule,
    NgbAlertModule,
    PanelMenuModule,
    DialogModule
  ],
  declarations: [
    ...partialsComponent
  ],
  exports: [
    ...partialsComponent,
    WCountriesModule
  ],
  providers: []
})
export class PartialsModule {
}
