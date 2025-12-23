export type TripId =
  | 'yunnan'
  | 'chengdu'
  | 'northeast'
  | 'chongqing'
  | 'pearl'
  | 'beijing'

export interface MarkerPoint {
  name: string
  lat: number
  lng: number
  description: string
}

export interface SpotGroup {
  label: string
  spots: string[]
}

export interface HighlightSection {
  title: string
  items: string[]
}

export interface PriceInfo {
  main: {
    label: string
    price: number | null
  }
  alt?: {
    label: string
    price: number
  }
}

export interface Trip {
  id: TripId
  tabLabel: string
  title: string
  subtitle: string
  dateWindow: string
  duration: string
  flight: PriceInfo
  itinerary: string
  playGroups: SpotGroup[]
  highlights: HighlightSection[]
  markers: MarkerPoint[]
  heroImage: string
}

import yunnanHero from '@/assets/yunnan-hero.jpg'
import chengduHero from '@/assets/chengdu-hero.webp'
import northeastMountain from '@/assets/northeast-mountain.jpg'
import chongqingHero from '@/assets/chongqing-hero.jpg'
import pearlHero from '@/assets/pearl-hero.jpg'
import beijingHero from '@/assets/beijing-hero.jpg'

export const GLOBAL_WINDOW = {
  text: '2025-12-27 出发 → 2026-01-03 返程',
  defaultDuration: '6 天 7 晚',
  pearlDuration: '7 天 7 晚',
}

export const trips: Trip[] = [
  {
    id: 'yunnan',
    tabLabel: '云南 · 昆明 + 大理 / 丽江',
    title: '云南（昆明 + 大理 / 丽江）',
    subtitle: '冬季气候温和，自然风光 + 古城文化兼具',
    dateWindow: GLOBAL_WINDOW.text,
    duration: GLOBAL_WINDOW.defaultDuration,
    flight: {
      main: {
        label: '杭州 ↔ 昆明，约 1500 元/人（非红眼）',
        price: 1500,
      },
      alt: {
        label: '若 1 月 2 日返程：约 1150 元/人',
        price: 1150,
      },
    },
    itinerary: '行程：12 月 27 日晚杭州出发 → 1 月 3 日早昆明返程；共 6 天 7 晚',
    playGroups: [
      {
        label: '昆明',
        spots: ['翠湖', '滇池', '昆明老街', '金马碧鸡坊', '云南民族村', '红嘴鸥'],
      },
      {
        label: '大理',
        spots: ['大理古城', '洱海', '苍山', '喜洲古镇', '双廊'],
      },
      {
        label: '丽江',
        spots: ['丽江古城', '玉龙雪山', '束河古镇', '拉市海骑马'],
      },
    ],
    highlights: [
      {
        title: '亮点',
        items: ['冬季气候温和', '自然风光 + 古城文化', '节奏可快可慢，适合度假'],
      },
      {
        title: '小贴士',
        items: ['可按“昆明→大理→丽江”或“昆明→丽江→大理”环线安排'],
      },
    ],
    markers: [
      {
        name: '昆明',
        lat: 25.044,
        lng: 102.706,
        description: '落地城市，可安排翠湖、滇池、云南民族村等轻松半日或一日游',
      },
      {
        name: '大理',
        lat: 25.606,
        lng: 100.27,
        description: '洱海、苍山、大理古城一带，适合慢节奏度假和自驾环海',
      },
      {
        name: '丽江',
        lat: 26.873,
        lng: 100.217,
        description: '丽江古城 + 玉龙雪山，可安排一日或两日山景与古城漫步',
      },
    ],
    heroImage: yunnanHero,
  },
  {
    id: 'chengdu',
    tabLabel: '成都及周边',
    title: '成都及周边',
    subtitle: '美食之都 + 轻松周边一日 / 二日游',
    dateWindow: GLOBAL_WINDOW.text,
    duration: GLOBAL_WINDOW.defaultDuration,
    flight: {
      main: {
        label: '杭州 ↔ 成都，约 1200 元/人（非红眼）',
        price: 1200,
      },
      alt: {
        label: '若 1 月 2 日返程：约 950 元/人',
        price: 950,
      },
    },
    itinerary:
      '行程：12 月 27 日下午出发 → 1 月 3 日早返程；共 6 天 7 晚',
    playGroups: [
      {
        label: '成都本地',
        spots: ['宽窄巷子', '锦里古街', '春熙路', '杜甫草堂', '武侯祠'],
      },
      {
        label: '周边一日 / 二日游',
        spots: ['都江堰 & 青城山', '乐山大佛（乘船观佛）', '峨眉山（冬季雪景 + 寺庙）'],
      },
    ],
    highlights: [
      {
        title: '亮点',
        items: ['美食密集', '市区 + 周边搭配灵活', '行程安排难度低'],
      },
    ],
    markers: [
      {
        name: '成都',
        lat: 30.658,
        lng: 104.064,
        description: '落地城市，宽窄巷子、锦里古街、春熙路等集中在市区',
      },
      {
        name: '都江堰',
        lat: 31.0,
        lng: 103.611,
        description: '世界文化遗产，都江堰景区可与青城山组合一日游',
      },
      {
        name: '青城山',
        lat: 30.903,
        lng: 103.883,
        description: '道教名山，适合与都江堰拼成休闲山景线路',
      },
      {
        name: '乐山',
        lat: 29.556,
        lng: 103.765,
        description: '乐山大佛，可安排乘船观佛，一日往返成都',
      },
      {
        name: '峨眉山',
        lat: 29.554,
        lng: 103.332,
        description: '冬季雪景 + 寺庙，适合 1-2 日行程，体验冰雪与人文',
      },
    ],
    heroImage: chengduHero,
  },
  {
    id: 'northeast',
    tabLabel: '东北冰雪 · 长春 / 哈尔滨 / 长白山',
    title: '东北冰雪（长春 / 哈尔滨 / 长白山）',
    subtitle: '冰雪景观全国顶级，专门为雪而去的行程',
    dateWindow: GLOBAL_WINDOW.text,
    duration: GLOBAL_WINDOW.defaultDuration,
    flight: {
      main: {
        label: '杭州 ↔ 长春，约 1500 元/人（非红眼）',
        price: 1500,
      },
    },
    itinerary:
      '行程：12 月 27 日下午出发 → 1 月 3 日早返程；共 6 天 7 晚',
    playGroups: [
      {
        label: '长春',
        spots: ['伪满皇宫博物院', '长影世纪城', '南湖公园', '人民广场'],
      },
      {
        label: '哈尔滨',
        spots: ['中央大街', '圣索菲亚教堂', '松花江冰雪活动', '太阳岛雪博会', '冰雪大世界'],
      },
      {
        label: '长白山',
        spots: ['天池', '瀑布', '温泉', '滑雪 / 雪地徒步'],
      },
    ],
    highlights: [
      {
        title: '亮点',
        items: ['冰雪景观全国顶级', '冬季限定体验', '节日氛围强'],
      },
    ],
    markers: [
      {
        name: '长春',
        lat: 43.901,
        lng: 125.326,
        description: '伪满皇宫博物院、长影世纪城、南湖公园等集中在市区',
      },
      {
        name: '哈尔滨',
        lat: 45.803,
        lng: 126.534,
        description: '中央大街、冰雪大世界、太阳岛雪博会等冰雪活动核心区域',
      },
      {
        name: '长白山',
        lat: 42.006,
        lng: 128.057,
        description: '天池、瀑布、温泉、滑雪 / 雪地徒步等集中区域',
      },
    ],
    heroImage: northeastMountain,
  },
  {
    id: 'chongqing',
    tabLabel: '重庆 · 夜景与山城',
    title: '重庆',
    subtitle: '夜景震撼，城市立体感强，机票性价比高',
    dateWindow: GLOBAL_WINDOW.text,
    duration: GLOBAL_WINDOW.defaultDuration,
    flight: {
      main: {
        label: '杭州 ↔ 重庆，约 1000 元/人（非红眼）',
        price: 1000,
      },
      alt: {
        label: '若 1 月 2 日返程：约 700 元/人',
        price: 700,
      },
    },
    itinerary:
      '行程：12 月 27 日下午出发 → 1 月 3 日早返程；共 6 天 7 晚',
    playGroups: [
      {
        label: '重庆主城',
        spots: [
          '解放碑',
          '洪崖洞夜景',
          '李子坝轻轨穿楼',
          '鹅岭二厂',
          '山城步道',
          '十八梯',
          '南山一棵树观景台',
        ],
      },
      {
        label: '周边一日 / 二日游',
        spots: ['武隆（天生三桥、仙女山）', '大足石刻', '磁器口古镇'],
      },
    ],
    highlights: [
      {
        title: '亮点',
        items: ['夜景震撼、城市立体感强', '美食集中', '机票性价比高'],
      },
      {
        title: '小缺点',
        items: ['台阶多、爬坡多', '冬季阴雨概率偏高'],
      },
    ],
    markers: [
      {
        name: '重庆主城',
        lat: 29.563,
        lng: 106.551,
        description: '解放碑、洪崖洞、李子坝轻轨等集中区域',
      },
      {
        name: '武隆',
        lat: 29.324,
        lng: 107.754,
        description: '天生三桥、仙女山一带，适合安排一日或两日游',
      },
      {
        name: '大足石刻',
        lat: 29.71,
        lng: 105.731,
        description: '世界文化遗产，可从主城包车或参团前往',
      },
      {
        name: '磁器口古镇',
        lat: 29.575,
        lng: 106.454,
        description: '老街漫步 + 美食集中区，适合半日游',
      },
      {
        name: '南山一棵树观景台',
        lat: 29.49,
        lng: 106.549,
        description: '俯瞰重庆夜景的经典机位，可与南山美食搭配',
      },
    ],
    heroImage: chongqingHero,
  },
  {
    id: 'pearl',
    tabLabel: '珠三角 · 深圳 + 广州',
    title: '深圳 + 广州（珠三角）',
    subtitle: '行程时间长 + 机票低，冬季温暖，城市间交通极便捷',
    dateWindow: GLOBAL_WINDOW.text,
    duration: GLOBAL_WINDOW.pearlDuration,
    flight: {
      main: {
        label: '杭州 ↔ 深圳 / 广州，约 1000 元/人（非红眼）',
        price: 1000,
      },
    },
    itinerary:
      '行程：12 月 27 日早上出发 → 1 月 3 日早返程；共 7 天 7 晚（多 1 个完整白天）',
    playGroups: [
      {
        label: '深圳',
        spots: [
          '深圳湾公园',
          '人才公园',
          '大梅沙 / 小梅沙',
          '较场尾',
          '平安金融中心',
          'OCT LOFT',
          '南头古城',
          '甘坑古镇',
          '香港一日（可选）',
        ],
      },
      {
        label: '广州',
        spots: [
          '珠江新城',
          '花城广场',
          '广州塔',
          '永庆坊',
          '上下九',
          '沙面',
          '陈家祠',
          '早茶、粤菜、烧腊、糖水',
        ],
      },
    ],
    highlights: [
      {
        title: '亮点',
        items: ['行程时间长 + 机票低', '冬季温暖', '城市间交通极便捷'],
      },
      {
        title: '小缺点',
        items: ['自然风景震撼度一般', '跨城市需要简单规划节奏'],
      },
    ],
    markers: [
      {
        name: '深圳',
        lat: 22.542,
        lng: 114.059,
        description: '深圳湾公园、人才公园、平安金融中心等现代城市景观集中区',
      },
      {
        name: '广州',
        lat: 23.129,
        lng: 113.264,
        description: '珠江新城、广州塔、老广州街区与早茶美食核心区',
      },
      {
        name: '香港',
        lat: 22.302,
        lng: 114.177,
        description: '可选香港一日游，视签注与节奏调整安排',
      },
    ],
    heroImage: pearlHero,
  },
  {
    id: 'beijing',
    tabLabel: '北京 · 历史文化 + 冬季雪景',
    title: '北京',
    subtitle: '历史文化密度全国第一，博物馆资源丰富',
    dateWindow: GLOBAL_WINDOW.text,
    duration: GLOBAL_WINDOW.defaultDuration,
    flight: {
      main: {
        label: '杭州 ↔ 北京，约 1000 元/人（非红眼）',
        price: 1000,
      },
    },
    itinerary: '行程：12 月 27 日出发 → 1 月 3 日返程；共 6 天 7 晚',
    playGroups: [
      {
        label: '城市经典',
        spots: ['天安门广场', '故宫', '景山公园', '前门大街'],
      },
      {
        label: '历史文化',
        spots: ['颐和园', '圆明园', '国家博物馆'],
      },
      {
        label: '冬季特色',
        spots: ['八达岭 / 慕田峪长城', '什刹海 / 后海冬季漫步'],
      },
    ],
    highlights: [
      {
        title: '亮点',
        items: ['历史文化密度全国第一', '冬季雪景加成', '博物馆资源丰富'],
      },
      {
        title: '小缺点',
        items: ['冬季偏冷', '景点分散，通勤时间较长'],
      },
    ],
    markers: [
      {
        name: '北京',
        lat: 39.904,
        lng: 116.407,
        description: '天安门广场、故宫、国家博物馆等核心城市景点所在',
      },
      {
        name: '八达岭长城',
        lat: 40.356,
        lng: 116.011,
        description: '经典长城段之一，冬季如遇降雪景色更佳',
      },
      {
        name: '慕田峪长城',
        lat: 40.438,
        lng: 116.56,
        description: '相对人少景美的长城段，适合一日往返',
      },
    ],
    heroImage: beijingHero,
  },
]

export const tripMapById: Record<TripId, Trip> = trips.reduce(
  (acc, trip) => {
    acc[trip.id] = trip
    return acc
  },
  {} as Record<TripId, Trip>,
)
