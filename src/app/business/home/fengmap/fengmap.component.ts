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
  // 定义全局map变量
  map = null;

  // 定义地图ID变量
  fmapID = 'gdc-9';

  // 定义二维/三维模式变量
  planarFlag = false;

  rootUrl = environment.baseUrl;

  ngOnInit() {
    this.openMap();
  }

  // 打开地图
  openMap() {
    const mapOptions = {
      container: document.getElementById('fengMap'), // 渲染dom
      // 地图数据位置
      mapServerURL: `${environment.baseUrl}assets/fengmap/${this.fmapID}`,
      // 主题数据位置
      mapThemeURL: `${environment.baseUrl}assets/fengmap/theme`,
      // 设置主题
      defaultThemeName: 'gdc-9',
      // 初始二维/三维状态,默认3D显示
      defaultViewMode: fengmap.FMViewMode.MODE_2D,
      appName: 'GDC9', // 开发者应用名称
      key: 'a7d64a35b5ae31e100e3fa5c64c582e2', // 开发者申请应用下web服务的key，地图应用密钥
    };

    // 初始化地图对象
    this.map = new fengmap.FMMap(mapOptions);

    // 打开Fengmap服务器的地图数据和主题
    this.map.openMapById(this.fmapID, error => {
      // 打印错误信息
      console.log(error);
    });

    // 地图加载完成事件
    this.map.on('loadComplete', () => {
      // 显示自定义控件按钮
      document.getElementById('btnsSwitch').style.display = 'block';
    });
  }

  changeMode(domObj) {
    if (this.planarFlag) {
      // 切换地图为二维模式
      if (this.map) {
        this.map.viewMode = fengmap.FMViewMode.MODE_2D;
      }
    } else {
      // 切换地图为三维模式
      if (this.map) {
        this.map.viewMode = fengmap.FMViewMode.MODE_3D;
      }
    }
    // 更改状态
    this.planarFlag = !this.planarFlag;
  }
}
