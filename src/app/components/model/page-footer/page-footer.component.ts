import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {
  constructor(private router: Router) {}

  // 图片所需路径
  rootPath = environment.baseUrl;
  entryList = [
    {
      name: '首页',
      link: 'newHome'
    },
    {
      name: '招商项目',
      link: 'canvass'
    },
    {
      name: '孵化中心',
      link: 'incubation'
    },
    {
      name: '园区活动',
      link: 'roadshow/activity'
    },
    {
      name: '路演活动',
      link: 'roadshow/roadshow'
    },
    {
      name: '企业服务',
      link: 'company-service'
    },
    {
      name: '政策咨询',
      link: 'park-service/policy'
    }
  ];

  ngOnInit() {}

  goAppointPage(data) {
    const url = data;
    this.router.navigate([url]);
  }
}
