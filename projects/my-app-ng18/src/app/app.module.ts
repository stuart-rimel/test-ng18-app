import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModusAngularComponentsModule } from '@trimble-cms/modus-wc-ng';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ModusAngularComponentsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule, ModusAngularComponentsModule],
})
export class AppModule {}
