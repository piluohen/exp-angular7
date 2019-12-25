import { environment } from 'src/environments/environment';

const rootPath = environment.baseUrl;

export const nexusDetail = {
  id: 1,
  name: '湖南华诺科技有限公司',
  tags: ['移动通信', '技术设备'],
  business: '移动通信',
  businessDesc: '高新技术企业认定，省市高新技术企业培育申报',
  phone: '400-3560900-800',
  address: '河南省郑州市郑东新区电子商务大厦9层',
  imgUrl: rootPath + 'assets/img/nexus/logo/1.png',
  website: 'http://www.huanuo-nsb.com/',
  remark:
    '湖南华诺科技有限公司是上海诺基亚贝尔股份有限公司的全资子公司，成立于2006年7月，总部设于湖南长沙，分公司设于郑州（诺基亚中国全球服务中心），拥有超过850名员工，主要致力于提供移动通信网络工程实施、运维，网络规划和优化，以及相应项目管理等服务。',
  personNumber: 64,
  doctorNumber: '1（占比2%）',
  masterNumber: '26（占比41%）',
  bachelorNumber: '5（占比8%）',
  collegeNumber: '9（占比14%）',
  contract: '张磊',
  contractPhone: '15839598563',
  contractEmail: 'junlei.zhang@nokia-sbell-huanuo.com'
};

export const nexusList = [
  '湖南华诺科技有限公司',
  '华森科技有限公司',
  '小德在线（北京）科技有限公司',
  'MGE TRAINING SOLUTIONS',
  'SHOSTAK高新认证中心',
  '瑞思科技有限公司',
  '快客高新技术产业咨询公司',
  'RIGHT EYE'
].map((item, i) => {
  return {
    ...nexusDetail,
    id: i,
    name: item,
    imgUrl: `${rootPath}assets/img/nexus/logo/${i + 1}.png`
  };
});
