import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { ActiveMenuService } from 'src/app/share/active-menu.service';
import { environment } from 'src/environments/environment';
import { Subject, fromEvent } from 'rxjs';
import { filter, takeUntil, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { menuList } from './menu';
import { Utils } from 'src/app/share/util/utils';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.scss']
})
export class HeaderNewComponent implements OnInit, OnDestroy {
  homeTop = true;

  isHome = true;

  menuList: any[] = menuList;

  userName: String = '';

  // 图片所需路径
  rootPath = environment.baseUrl;

  destroy$ = new Subject();

  routerEvent: any;

  routerData: any = {};

  activeMenu: any = {};

  nzSelectedIndex: any = 0;

  scroll$: any;

  constructor(private router: Router, private route: ActivatedRoute, private menu: ActiveMenuService) {
    this.updateRoute();
  }

  ngOnInit() {
    this.userName = Cookie.get('userName');
  }

  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }

  jumpHome(): void {
    this.router.navigateByUrl('/newHome');
  }

  /**
   * 跳转到相应地址
   * @param url
   */
  toLink(menu: any) {
    const { path, thirdPath } = menu;
    if (!path) {
      return;
    }
    if (thirdPath === 1) {
      window.open(path);
    } else {
      this.router.navigateByUrl(menu.path);
    }
  }

  /**
   * 监听路由变更，解决菜单高亮问题
   */
  updateRoute(): void {
    this.routerEvent = this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe(data => {
        const { url, urlAfterRedirects } = data as any;
        this.routerData = data;
        if (urlAfterRedirects === '/newHome') {
          this.activeMenu = {};
          this.isHome = true;
          this.homeTop = true;
          // this.registerScrollEvent();
        } else {
          this.homeTop = false;
          this.isHome = false;
          this.showTabList(data);
        }
        this.updateMenu(data);
        window.scrollTo(0, 0);
      });
  }

  /**
   * 变更菜单高亮
   * @param url 路径
   */
  updateMenu(data: any): void {
    const { url, urlAfterRedirects } = data;
    this.menuList = [...this.menuList].map(item => {
      const isActive = item.path === this.activeMenu.path;
      if (isActive && url !== '/newHome') {
        item.selected = true;
        if (item.children) {
          item.children.forEach((v, i) => {
            v.selected = i === this.nzSelectedIndex;
            return v;
          });
        }
      } else {
        item.selected = false;
        if (item.children) {
          item.children.forEach(v => {
            v.selected = false;
            return v;
          });
        }
      }
      return item;
    });
  }

  /**
   * 展示二级菜单
   */
  showTabList(data: any): void {
    const { urlAfterRedirects } = data;
    const { menu, index } = this.setActiveMenu(urlAfterRedirects.slice(1));
    if (menu) {
      this.activeMenu = menu;
    }
    this.nzSelectedIndex = index;
  }

  /**
   * 获取激活菜单与二级菜单索引
   * @param path 路径
   */
  setActiveMenu(path: any) {
    const pathArr = path.split('/');
    let menu: any;
    let index = 0;
    this.menuList.forEach(item => {
      if (item.path === pathArr[0]) {
        menu = item;
        if (item.children && item.children.length > 0) {
          item.children.forEach((v, i) => {
            if (v.path) {
              const childrenPathArr = v.path.split('/');
              if (pathArr[0] === childrenPathArr[0] && pathArr[1] === childrenPathArr[1]) {
                index = i;
              }
            }
          });
        }
      }
    });
    return { menu, index };
  }

  /**
   * 跳转到二级菜单路由
   * @param event 事件
   */
  handleTabClick(data: any): void {
    const { thirdPath, path } = data;
    if (!path) {
      return;
    }
    if (thirdPath && thirdPath === 1) {
      this.nzSelectedIndex = 0;
      window.open(path);
      this.showTabList(this.routerData);
    } else {
      this.router.navigateByUrl(path);
    }
  }

  handleScrollChange(event: any): void {
    this.homeTop = !event;
  }

  /**
   * 设置背景图
   */
  setPageStyle() {
    return {
      'background-image': this.activeMenu.imgUrl
    };
  }

  /**
   * 前往个人中心
   */
  // accountPage() {
  //   this.router.navigateByUrl('account');
  // }

  /**
   * 跳转到企业信息
   */
  // toFirm() {
  //   this.router.navigateByUrl('firm');
  // }

  /**
   * 返回登录界面
   */
  // loginPage() {
  //   this.router.navigateByUrl('');
  // }
}
