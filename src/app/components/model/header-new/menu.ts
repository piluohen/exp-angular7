import { environment } from 'src/environments/environment';

const rootPath = environment.baseUrl;

export const menuList = [
  {
    id: 1,
    name: '招商项目',
    path: 'canvass',
    selected: false,
    imgUrl: `${rootPath}assets/img/header/bg/zsxm.png`,
    font: `${rootPath}assets/img/header/font/zsxm.png`,
    children: [
      { name: '招商项目', path: 'canvass/canvass-item' },
      { name: '招商预约', path: 'canvass/canvass-reservation' }
    ]
  },
  {
    id: 2,
    name: '企业服务',
    path: 'company-service',
    selected: false,
    imgUrl: `${rootPath}assets/img/header/bg/qyfw.png`,
    font: `${rootPath}assets/img/header/font/qyfw.png`,
    children: [
      { name: '续租申请', path: 'company-service/relet' },
      { name: '物业报修', path: 'company-service/repairs' },
      { name: '物业投诉', path: 'company-service/complaint' }
    ]
  },
  {
    id: 3,
    name: '孵化中心',
    path: 'incubation',
    selected: false,
    imgUrl: `${rootPath}assets/img/header/bg/yqhl.png`,
    font: `${rootPath}assets/img/header/font/fhzx.png`,
    children: [
      { name: '会议室预定', path: 'incubation/conference' },
      // { name: '工位预定', path: null },
      // { name: '场地预定', path: null },
      { name: '投金融', path: 'https://chuangke.aliyun.com/', thirdPath: 1 }
    ]
  },
  {
    id: 4,
    name: '园区服务',
    path: 'park-service',
    selected: false,
    imgUrl: `${rootPath}assets/img/header/bg/yqfw.png`,
    font: `${rootPath}assets/img/header/font/yqfw.png`,
    children: [
      { name: '服务集市', path: 'park-service/fair' },
      { name: '扶持政策', path: 'park-service/policy' },
      { name: '申报中心', path: 'park-service/declare' },
      { name: '人才培训', path: 'http://www.easywits.com/', thirdPath: 1 },
      { name: '人才公寓', path: 'https://j.map.baidu.com/1c/opr', thirdPath: 1 }
    ]
  },
  {
    id: 5,
    name: '园企互连',
    selected: false,
    path: 'nexus',
    imgUrl: `${rootPath}assets/img/header/bg/yqhl.png`,
    font: `${rootPath}assets/img/header/font/yqhl.png`,
    children: [{ id: 51, name: '企业列表', path: 'nexus/company' }]
  },
  {
    id: 6,
    name: '路演活动',
    selected: false,
    path: 'roadshow',
    imgUrl: `${rootPath}assets/img/header/bg/lyhd.png`,
    font: `${rootPath}assets/img/header/font/lyhd.png`,
    children: [
      { name: '路演中心', path: 'roadshow/roadshow' },
      { name: '园区活动', path: 'roadshow/activity' }
    ]
  },
  {
    id: 7,
    name: '新闻资讯',
    selected: false,
    path: 'news',
    imgUrl: `${rootPath}assets/img/header/bg/xwzx.png`,
    font: `${rootPath}assets/img/header/font/xwzx.png`,
    children: [
      { name: '新闻资讯', path: 'news/news' },
      { name: '园区公告', path: 'news/announce' }
    ]
  }
];
