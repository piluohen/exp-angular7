import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HttpExceptionInterceptor } from './httpExceptionInterceptor';
import { TrustHtmlPipe, TrustScriptPipe, TrustStylePipe, TrustUrlPipe } from './trust-resource.pipe';
import { WebcamModule } from 'ngx-webcam';

import { HnUiModule } from 'hn-ui';

import { PageFooterComponent } from '../components/model/page-footer/page-footer.component';
import { LayoutComponent } from '../components/model/layout/layout.component';
import { LittleTitleComponent } from '../components/model/little-title/little-title.component';
import { SpecificHeaderComponent } from '../components/model/specific-header/specific-header.component';
import { ToolBarComponent } from '../components/model/tool-bar/tool-bar.component';
import { FilterListComponent } from '../components/model/filter-list/filter-list.component';

import { DefaultDataService } from '../service/session/defaultData.service';
import { CompanyTypeService } from '../service/session/companyType.service';
import { HeaderComponent } from '../components/model/header/header.component';
import { HeaderNewComponent } from '../components/model/header-new/header-new.component';
import { FeedbackComponent } from '../components/model/feedback/feedback.component';
import { FileDownloadComponent } from '../components/model/file-download/file-download.component';

import { ScrollDirective } from '../directive/scroll.directive';

/**
 *公共组件
 * @type {any[]}
 */
const COMPONENT = [
  TrustUrlPipe,
  TrustHtmlPipe,
  TrustScriptPipe,
  TrustStylePipe,
  PageFooterComponent,
  ToolBarComponent,
  LayoutComponent,
  SpecificHeaderComponent,
  LittleTitleComponent,
  HeaderComponent,
  HeaderNewComponent,
  FilterListComponent,
  FeedbackComponent,
  FileDownloadComponent
];

/**
 * 第三方模块
 * @type {NgZorroAntdModule[]}
 */
const THIRD_MODULE = [NgZorroAntdModule, WebcamModule, HnUiModule];

/**
 * 公共指令
 * @type {any[]}
 */
const DIRECTIVES = [ScrollDirective];

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...THIRD_MODULE
  ],
  declarations: [...COMPONENT, ...DIRECTIVES],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpExceptionInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN },
    DefaultDataService,
    CompanyTypeService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...THIRD_MODULE,
    ...COMPONENT,
    ...DIRECTIVES
  ]
})
export class ShareModule {}
