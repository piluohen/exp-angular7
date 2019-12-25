import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { HttpService } from './service/http/http.service';
import { AuthService } from './auth.service';

import { HomeModule } from './business/home/home.module';

registerLocaleData(zh);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ShareModule, AppRoutingModule, NgZorroAntdModule, HomeModule],
  providers: [HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
