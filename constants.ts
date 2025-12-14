import { ResourceLink, ResourceTag } from './types';

export const RESOURCES: ResourceLink[] = [
  {
    id: '1',
    title: '宏福苑紀錄庫',
    url: 'https://adminlby.github.io/Hong-Kong-Fire-Documentary/',
    description: '相關紀錄及資料庫 by 女神',
    tags: [ResourceTag.DOCUMENTARY]
  },
  {
    id: '2',
    title: '聞庫 Collection News',
    url: 'https://collection.news/',
    description: '收藏超過 230 萬份新聞報導，包括蘋果日報及立場新聞等',
    tags: [ResourceTag.NEWS]
  },
  {
    id: '3',
    title: '永遠紀念宏福苑',
    url: 'https://taipo-fire.org/',
    description: '宏福苑火災紀念網站',
    tags: [ResourceTag.MEMORIAL]
  },
  {
    id: '4',
    title: '宏福苑互助平台',
    url: 'https://post.taipo-fire.org/',
    description: '宏福苑互助平台是全港最活躍災後互助平台 宏福苑互助平台相關資訊發布及留言板',
    tags: [ResourceTag.MEMORIAL]
  },
  {
    id: '5',
    title: '宏福苑業主立案法團',
    url: 'http://www.wangfuk.org/html/home/index.asp',
    description: '法團公開文件及資訊整理',
    tags: [ResourceTag.OFFICIAL]
  },
  {
    id: '6',
    title: '大埔宏福苑火警支援整合平台',
    url: 'https://supporttaipohk.com/',
    description: '支援資訊及資源整合',
    tags: [ResourceTag.SUPPORT]
  },
  {
    id: '7',
    title: '宏福相簿收集',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdHoJCPOWLYovzGt2GmSJQGd48Q0MHnoc1oalyomeWW2pk-4Q/viewform',
    description: '收集相關歷史照片及影像的表單',
    tags: [ResourceTag.ALBUM]
  },
  {
    id: '8',
    title: '大埔火災全港 250+ 資源整合',
    url: 'https://opaque-laundry-ab5.notion.site/350-2b797bbbedf88061b0b3f8970b8642a7',
    description: '網站以「長期、穩定」為旨，分為「災民用」及「義工用」之資源，一站式人手統整最準確資源，致力使災民獲最精準災後重建的資源網。',
    tags: [ResourceTag.SUPPORT]
  },
  {
    id: '9',
    title: '大埔守望 Taipo Vigil',
    url: 'https://taipovigil.hk/zh-TW',
    description: '記錄捐款去向、團體及善款流向，確保透明度',
    tags: [ResourceTag.DONATION]
  },
  {
    id: '10',
    title: '政府官方網站',
    url: 'https://www.taipofire.gov.hk/',
    description: '政府發布之相關資訊',
    tags: [ResourceTag.OFFICIAL]
  }
];