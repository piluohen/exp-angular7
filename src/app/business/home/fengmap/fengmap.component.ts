import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const fengmap: any;

@Component({
  selector: 'app-fengmap',
  templateUrl: './fengmap.component.html',
  styleUrls: ['./fengmap.component.scss']
})
export class FengmapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const fmapID = 'gdc-9'; // mapId
    const map = new fengmap.FMMap({
      container: document.getElementById('fengMap'), // 渲染dom
      mapServerURL: `${environment.baseUrl}assets/fengmap/${fmapID}`,
      mapThemeURL: `${environment.baseUrl}assets/fengmap/theme`,
      defaultThemeName: 'gdc-9',
      defaultMapScaleLevel: 19,
      defaultControlsPose: fengmap.FMDirection.NORTH,
      focusAnimateMode: false, // 开启聚焦层切换的动画显示
      viewModeAnimateMode: false, // 开启2维，3维切换的动画显示
      moveToAnimateMode: false, // 地图定位跳转动画设置
      appName: 'GDC9', // 开发者应用名称
      key: 'a7d64a35b5ae31e100e3fa5c64c582e2' // 开发者申请应用下web服务的key
    });

    // 打开Fengmap服务器的地图数据和主题
    map.openMapById(fmapID);
  }
}
