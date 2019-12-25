import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}
  // 图片引用所需根路径
  rootPath = environment.baseUrl;

  // 企业服务
  entServiceArray = [
    {
      title: '产值上报',
      servImgUrl: this.rootPath + 'assets/img/home/value.png'
    },
    {
      title: '孵化载体',
      servImgUrl: this.rootPath + 'assets/img/home/hatch.png'
    },
    {
      title: '服务集市',
      servImgUrl: this.rootPath + 'assets/img/home/bazaar.png'
    },
    {
      title: '路演中心',
      servImgUrl: this.rootPath + 'assets/img/home/show.png'
    },
    {
      title: '申报中心',
      servImgUrl: this.rootPath + 'assets/img/home/declare.png'
    },
    {
      title: '税收上报',
      servImgUrl: this.rootPath + 'assets/img/home/tax.png'
    },
    {
      title: '科技金融(投融资)',
      servImgUrl: this.rootPath + 'assets/img/home/financing.png'
    },
    {
      title: '更多服务',
      servImgUrl: this.rootPath + 'assets/img/home/more.png'
    }
  ];

  // 我要办
  wantArray = [
    { title: '我要看', cont: '公示公告 政策解读', wantImgUrl: this.rootPath + 'assets/img/home/look.png' },
    { title: '我要办', cont: '无从下手？ 点我帮助', wantImgUrl: this.rootPath + 'assets/img/home/how.png' },
    { title: '我要问', cont: '常见问题 咨询留言', wantImgUrl: this.rootPath + 'assets/img/home/ask.png' },
    { title: '我要评', cont: '评价 建议 投诉', wantImgUrl: this.rootPath + 'assets/img/home/evaluate.png' }
  ];

  // 推荐咨询服务
  recomArray = [
    '注册成立',
    '运营咨询',
    '人力资源咨询',
    '企业资质咨询',
    '创新研发咨询',
    '企业方向咨询',
    '融资上市咨询',
    '产业发展咨询'
  ];

  // 标题左右图标
  leftImg = this.rootPath + 'assets/img/home/left.png';
  rightImg = this.rootPath + 'assets/img/home/right.png';

  // 场地资源推荐
  recomAddress = [
    {
      addImgUrl: this.rootPath + 'assets/img/home/scene1.png',
      title: '健身房A2B12',
      address: '位置：A栋2单元12层1203',
      count: '容纳人数：100',
      source: '设备资源：健身器材、球类场地',
      active: true
    },
    {
      addImgUrl: this.rootPath + 'assets/img/home/scene2.png',
      title: '多功能演示厅',
      address: '位置：A栋1单元1层101',
      count: '容纳人数：30',
      source: '设备资源：投影仪、音响',
      active: false
    },
    {
      addImgUrl: this.rootPath + 'assets/img/home/scene3.png',
      title: '简餐咖啡厅',
      address: '位置：A栋2单元12层1203',
      count: '容纳人数：45',
      source: '设备资源：自助咖啡、自助餐',
      active: false
    },
    {
      addImgUrl: this.rootPath + 'assets/img/home/scene4.png',
      title: '多人会议室',
      address: '位置：A栋1单元1层101',
      count: '容纳人数：30',
      source: '设备资源：会议圆桌、其他设备',
      active: false
    }
  ];

  // 导师推荐
  recomMaster = [
    {
      masImgUrl: this.rootPath + 'assets/img/home/people.png',
      name: '李坤阳',
      main: '制造、消费',
      description:
        '曾任泰伯研究院分析师（地理信息及智慧城市），服务大众集团、大众进口等车企客户，拥有为省地理信息产业园进行顶层设计的经验，持续关注新制造、新消费领域'
    },
    {
      masImgUrl: this.rootPath + 'assets/img/home/people.png',
      name: '李坤阳',
      main: '制造、消费',
      description:
        '曾任泰伯研究院分析师（地理信息及智慧城市），服务大众集团、大众进口等车企客户，拥有为省地理信息产业园进行顶层设计的经验，持续关注新制造、新消费领域'
    },
    {
      masImgUrl: this.rootPath + 'assets/img/home/people.png',
      name: '李坤阳',
      main: '制造、消费',
      description:
        '曾任泰伯研究院分析师（地理信息及智慧城市），服务大众集团、大众进口等车企客户，拥有为省地理信息产业园进行顶层设计的经验，持续关注新制造、新消费领域'
    },
    {
      masImgUrl: this.rootPath + 'assets/img/home/people.png',
      name: '李坤阳',
      main: '制造、消费',
      description:
        '曾任泰伯研究院分析师（地理信息及智慧城市），服务大众集团、大众进口等车企客户，拥有为省地理信息产业园进行顶层设计的经验，持续关注新制造、新消费领域'
    }
  ];

  // 服务推荐
  recomService = [
    {
      servImgUrl: this.rootPath + 'assets/img/home/scene2.png',
      title: '常年法律顾问',
      content: '就客户提出的法律问题进行口头或书面解答，提供法律资料，进行法律检索',
      active: false
    },
    {
      servImgUrl: this.rootPath + 'assets/img/home/scene3.png',
      title: '代理记账',
      content: '帮助企业建立会计制度和核算体系，规范企业日常财务行为；日常财务凭证的账务处理',
      active: true
    },
    {
      servImgUrl: this.rootPath + 'assets/img/home/scene2.png',
      title: '财税咨询顾问',
      content: '中介机构对企业提供咨询顾问服务，帮助企业规范账务处理、准确核算专项资金',
      active: false
    },
    {
      servImgUrl: this.rootPath + 'assets/img/home/scene3.png',
      title: '中介服务',
      content: '技术审查、论证、评估等中介服务网上交易的综合性服务平台',
      active: false
    }
  ];

  @ViewChild('carousel') carousel: any;

  // 园区资讯轮播图片数据
  newsCaro = [
    {
      newsImgUrl: this.rootPath + 'assets/img/home/scene3.png',
      title: '张苏勤部长一行莅临园区指导工作'
    },
    {
      newsImgUrl: this.rootPath + 'assets/img/home/scene3.png',
      title: '张苏勤部长一行莅临园区指导工作'
    },
    {
      newsImgUrl: this.rootPath + 'assets/img/home/scene3.png',
      title: '张苏勤部长一行莅临园区指导工作'
    }
  ];
  // 园区新闻主要数据
  newsMain = [
    {
      title: '第二届世界顶尖科学家论坛在上海召开 习近平向论坛致贺信',
      content:
        '第二届世界顶尖科学家论坛昨天上午在中国（上海）自由贸易区临港新片区开幕。国家主席习近平向论坛致贺信。中共中央政治局委员、上海...'
    }
  ];
  // 园区新闻列表数据
  newsListArray = [
    { title: '中组部部长陈希：以更加积极更加开放更加有...', date: '2019.10.30' },
    { title: '汇聚科技力量 共创数字未来', date: '2019.10.29' },
    { title: '税务部门提供暖心服务，政策解读“送货上门”', date: '2019.10.28' },
    { title: '落实品质培训，严抓安全管理', date: '2019.10.27' },
    { title: '习近平将出席第二届进博会开幕式  ', date: '2019.10.26' }
  ];

  // 专题报告
  reportImg = [
    this.rootPath + 'assets/img/home/scene4.png',
    this.rootPath + 'assets/img/home/scene4.png',
    this.rootPath + 'assets/img/home/scene4.png'
  ];

  ngOnInit() {}

  /**
   * 上一张操作
   */
  handlePrev(): void {
    this.carousel.pre();
  }

  /**
   * 下一张操作
   */
  handleNext(): void {
    this.carousel.next();
  }

  clickAdd(item) {
    this.recomAddress.forEach(e => (e.active = false));
    item.active = true;
  }

  clickServ(item) {
    this.recomService.forEach(e => (e.active = false));
    item.active = true;
  }
}
