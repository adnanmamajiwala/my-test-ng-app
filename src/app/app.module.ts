import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Http, HttpModule, JsonpModule} from '@angular/http';
import {ConfigService} from './services/config.service';

function configServiceFactory(config: ConfigService) {
  return () => config.load().then();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService, Http],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

