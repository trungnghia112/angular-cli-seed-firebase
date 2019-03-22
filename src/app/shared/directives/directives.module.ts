import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutofocusInputDirective } from './autofocus.directive';
import { ShowAuthedDirective } from './show-authed.directive';
import { HrefDirective } from './href.directive';
import { DropZoneDirective } from './drop-zone.directive';
import { ButtonLoadingDirective } from './button-loading.directive';
import { ButtonBackDirective } from './button-back.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutofocusInputDirective,
    ShowAuthedDirective,
    HrefDirective,
    DropZoneDirective,
    ButtonLoadingDirective,
    ButtonBackDirective
  ],
  exports: [
    AutofocusInputDirective,
    ShowAuthedDirective,
    HrefDirective,
    DropZoneDirective,
    ButtonLoadingDirective,
    ButtonBackDirective
  ]
})
export class DirectivesModule {
}
