import { ResourceLink, ResourceTag } from './types';

export const RESOURCES: ResourceLink[] = [
  {
    id: '1',
    title: '宏福苑紀錄庫 (by 女神)',
    url: 'https://adminlby.github.io/Hong-Kong-Fire-Documentary/',
    description: '相關紀錄及資料庫',
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
    title: '宏福苑互助平台 by dragon_mexc',
    url: 'https://post.taipo-fire.org/',
    description: '宏福苑互助平台是全港最活躍災後互助平台，提供相關資訊發布及留言板',
    tags: [ResourceTag.SUPPORT]
  },
  {
    id: '11',
    title: '宏福苑紀念冊 by dragon_mexc',
    url: 'https://rember.taipo-fire.org/',
    description: '大埔宏福苑火警網上紀念冊',
    tags: [ResourceTag.MEMORIAL]
  },
  {
    id: '12',
    title: '悼念消防員何偉豪',
    url: 'https://howaiho.taipo-fire.org/',
    description: '永遠懷念 - 消防總隊目何偉豪',
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
    title: '宏福苑的過往相片收集',
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
    description: '這個平台成立的初衷是希望讓公眾清楚了解到每一筆捐款的去向，並記錄這次捐款的團體或個人是誰，善款最終流向何處。',
    tags: [ResourceTag.DONATION]
  },
  {
    id: '10',
    title: '政府官方網站 - 大埔宏福苑支援服務',
    url: 'https://www.taipofire.gov.hk/',
    description: '政府發布之相關資訊',
    tags: [ResourceTag.OFFICIAL]
  },
  {
    id: '14',
    title: '建築物管理中央平台 (BMIS)',
    url: 'https://bmis.buildingmgt.gov.hk/',
    description: '民政事務總署資料庫，可查閱大廈管理組織名單及相關資料',
    tags: [ResourceTag.OFFICIAL]
  },
  {
    id: '13',
    title: '強制驗樓計劃 (屋宇署)',
    url: 'https://www.bd.gov.hk/tc/safety-inspection/mbis/scope-and-standards/index.html',
    description: '屋宇署強制驗樓計劃範圍、標準及程序指引',
    tags: [ResourceTag.OFFICIAL]
  },
  {
    id: '16',
    title: '樓宇復修平台 - 造價參考',
    url: 'https://www.brplatform.org.hk/tc/cost-reference-centre',
    description: '分析樓宇復修工程造價，提供常用工作項目價格參考',
    tags: [ResourceTag.SUPPORT, ResourceTag.OFFICIAL]
  },
  {
    id: '17',
    title: '競爭事務委員會市場研究報告',
    url: 'https://www.compcomm.hk/tc/media/reports_publications/files/Report_on_market_study_C.pdf',
    description: '關於香港住宅樓宇維修及保養市場的研究報告',
    tags: [ResourceTag.DOCUMENTARY, ResourceTag.OFFICIAL]
  },
  {
    id: '15',
    title: '資料一線通 (Data.gov.hk)',
    url: 'https://data.gov.hk/tc/',
    description: '香港政府開放數據平台，提供各類公共資料',
    tags: [ResourceTag.OFFICIAL]
  }
];