import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedBoxLoadingComponent } from './components/box-loading/box-loading.component';
import { SharedBoxNoDataComponent } from './components/box-nodata/box-nodata.component';

import { SharedCardModule } from './components/card/card.module';
import { SharedNavTabModule } from './components/nav-tab/nav-tab.module';
import { SharedSplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SharedTableModule } from './components/table/table.module';

import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

const sharedComponents = [
  SharedBoxLoadingComponent,
  SharedBoxNoDataComponent,
  SharedSplashScreenComponent
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

    // modules
    SharedCardModule,
    SharedNavTabModule,
    SharedTableModule,

    ...sharedComponents
  ]
})
export class SharedAppModule {
}
