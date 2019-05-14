import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@env/environment';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { SharedBoxLoadingComponent } from './components/box-loading/box-loading.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

const sharedComponents = [
  SharedBoxLoadingComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule,

    // Pipe
    PipesModule,

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule,

    // Pipe
    PipesModule,

    // 3rd party
    TranslateModule,

    ...sharedComponents
  ]
})
export class SharedAppModule {
}
