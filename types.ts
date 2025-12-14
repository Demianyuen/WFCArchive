export interface ResourceLink {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: ResourceTag[];
}

export enum ResourceTag {
  DOCUMENTARY = '紀錄庫',
  NEWS = '新聞存檔',
  MEMORIAL = '紀念',
  OFFICIAL = '官方',
  SUPPORT = '支援/資源',
  ALBUM = '相簿',
  DONATION = '捐款透明度'
}