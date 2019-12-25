import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { ActiveMenuService } from '../../../share/active-menu.service';
import { environment } from '../../../../environments/environment';
import { merge, EMPTY, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  url = 'home';
  menuList: any[] = [
    {
      id: 1,
      name: '首页',
      children: null,
      selected: true,
      url: 'home'
    },
    {
      id: 2,
      name: '招商项目',
      url: null,
      selected: false,
      children: [
        { name: '招商项目', children: null, url: 'canvass' },
        { name: '招商预约', children: null, url: null }
      ]
    },
    {
      id: 3,
      name: '企业服务',
      url: null,
      selected: false,
      children: [
        {
          name: '工商财务服务',
          url: null,
          children: [
            { name: '产值上报', children: null, url: 'enterprise/outPut' },
            { name: '税收上报', children: null, url: 'enterprise/tax' }
          ]
        },
        {
          name: '申报中心',
          url: 'enterprise/report',
          children: null
        },
        {
          name: '科技金融',
          url: 'enterprise/finance',
          children: null
        },
        { name: '路演中心', children: null, url: 'enterprise/roadShow' },
        { name: '孵化载体', children: null, url: 'enterprise/carrier' },
        { name: '创业导师', children: null, url: 'enterprise/mentors' }
      ]
    },
    {
      id: 4,
      name: '公共服务',
      url: null,
      selected: false,
      children: [
        {
          name: '物业服务',
          children: [{ name: '物业保修', children: null, url: null }],
          url: 'services/property'
        },
        {
          name: '人才服务',
          children: [{ name: '人才培训', children: null, url: null }],
          url: 'services/talent'
        }
      ]
    },
    {
      id: 5,
      name: '政策',
      url: 'policy',
      selected: false,
      children: null
    },
    {
      id: 6,
      name: '活动',
      children: null,
      selected: false,
      url: 'activity'
    },
    {
      id: 7,
      name: '资讯中心',
      children: null,
      selected: false,
      url: 'news'
    },
    {
      id: 8,
      name: '党建动态',
      children: null,
      selected: false,
      url: ''
    }
  ];
  userName;
  // 图片所需路径
  rootPath = environment.baseUrl;
  bg = true;

  destroy$ = new Subject();

  routerEvent: any;

  constructor(private router: Router, private route: ActivatedRoute, private menu: ActiveMenuService) {
    this.updateRoute();
  }

  ngOnInit() {
    this.userName = Cookie.get('userName');
  }

  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }

  /**
   * 跳转到相应地址
   * @param url
   */
  toLink(url) {
    if (!url) {
      return;
    }
    // 动态切换背景图
    if (url === 'home' || url === 'home') {
      this.bg = true;
    } else {
      this.bg = false;
    }
    this.router.navigateByUrl(url);
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
        const url = data['url'].slice(1);
        this.menuList = this.menuList.map(item => {
          item.selected = false;
          let isActive = false;
          if (item.url && item.url.charAt(0) === '/') {
            isActive = item.url === data['url'];
          } else {
            isActive = item.url === url;
          }
          if (isActive) {
            item.selected = true;
          }
          return item;
        });
      });
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
