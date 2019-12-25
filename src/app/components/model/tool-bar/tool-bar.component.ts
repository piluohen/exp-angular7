import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import { fadeMotion, toNumber, NzScrollService } from 'ng-zorro-antd/core';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  animations: [fadeMotion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class ToolBarComponent implements OnInit, OnDestroy {
  private scroll$: Subscription | null = null;
  private targetEle: HTMLElement | null = null;

  rootPath = environment.baseUrl;

  qrcodeUrl = `${this.rootPath}assets/img/qrcode.png`;

  visible = false;

  feedbackVisible = true;

  @Input() template: TemplateRef<void>;

  private _visibilityHeight = 400;

  @Input()
  set visibilityHeight(value: number) {
    this._visibilityHeight = toNumber(value, 400);
  }

  get visibilityHeight(): number {
    return this._visibilityHeight;
  }

  @Input()
  set target(el: string | HTMLElement) {
    this.targetEle = typeof el === 'string' ? this.doc.querySelector(el) : el;
    this.registerScrollEvent();
  }

  @Output() readonly click: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private scrollSrv: NzScrollService,
    // tslint:disable-next-line:no-any
    @Inject(DOCUMENT) private doc: any,
    private platform: Platform,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!this.scroll$) {
      this.registerScrollEvent();
    }
  }

  clickBackTop(): void {
    this.scrollSrv.scrollTo(this.getTarget(), 0);
    this.click.emit(true);
  }

  private getTarget(): HTMLElement | Window {
    return this.targetEle || window;
  }

  private handleScroll(): void {
    if (this.scrollSrv.getScroll(this.getTarget()) < this.visibilityHeight) {
      this.feedbackVisible = false;
    }
    if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.visibilityHeight) {
      return;
    }
    this.visible = !this.visible;
    this.cd.markForCheck();
  }

  private removeListen(): void {
    if (this.scroll$) {
      this.scroll$.unsubscribe();
    }
  }

  private registerScrollEvent(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeListen();
    this.handleScroll();
    this.scroll$ = fromEvent(this.getTarget(), 'scroll')
      .pipe(throttleTime(50), distinctUntilChanged())
      .subscribe(() => this.handleScroll());
  }

  handleCancel() {
    this.feedbackVisible = false;
  }

  ngOnDestroy(): void {
    this.removeListen();
  }
}
