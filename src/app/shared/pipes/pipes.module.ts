import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByMapPipe } from './group-by-map.pipe';
import { KeysPipe } from './keys.pipe';
import { KeyToValuePipe } from './keyToValue.pipe';
import { BytesPipe } from './bytes.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { ShortNumberPipe } from './short-number.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GroupByMapPipe,
    KeysPipe,
    KeyToValuePipe,
    BytesPipe,
    SafeHtmlPipe,
    ShortNumberPipe
  ],
  exports: [
    GroupByMapPipe,
    KeysPipe,
    KeyToValuePipe,
    BytesPipe,
    SafeHtmlPipe,
    ShortNumberPipe
  ],
  providers: []
})

export class PipesModule {
}
