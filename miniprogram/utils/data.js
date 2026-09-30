/**
 * 本地兜底数据
 * ============================================================
 * 与后端 backend/data.py 保持一致，当 Python 后端未启动时，
 * 前端可离线完整展示。数据结构完全相同。
 */

const CITIES = [
  { id: 1,  name: '厦门',   pinyin: 'Xiamen',    emoji: '🏝️', tag: '海上花园',   desc: '闽南明珠，鼓浪屿、厦门大学、环岛路，浪漫清新的滨海之城。' },
  { id: 2,  name: '福州',   pinyin: 'Fuzhou',    emoji: '🏮', tag: '有福之州',   desc: '八闽首府，三坊七巷的古韵与温泉榕城的闲适在此交汇。' },
  { id: 3,  name: '泉州',   pinyin: 'Quanzhou',  emoji: '🛕', tag: '宋元世遗',   desc: '宋元中国的世界海洋商贸中心，海丝起点，半城烟火半城仙。' },
  { id: 4,  name: '武夷山', pinyin: 'Wuyishan',  emoji: '⛰️', tag: '双世遗山水', desc: '世界自然与文化双遗产，九曲溪畔岩骨花香，大红袍的故乡。' },
  { id: 5,  name: '漳州',   pinyin: 'Zhangzhou', emoji: '🏯', tag: '土楼故里',   desc: '花果鱼米之乡，南靖土楼的客家传奇与东山岛的海天风光。' },
  { id: 6,  name: '龙岩',   pinyin: 'Longyan',   emoji: '⛰️', tag: '客家红土',   desc: '客家祖地，红色圣地，永定土楼群与古田会议旧址闻名于世。' },
  { id: 7,  name: '莆田',   pinyin: 'Putian',    emoji: '🛕', tag: '妈祖故乡',   desc: '妈祖文化发祥地，湄洲岛祖庙香火鼎盛，天下妈祖出湄洲。' },
  { id: 8,  name: '宁德',   pinyin: 'Ningde',    emoji: '🌊', tag: '山海画廊',   desc: '海上仙都太姥山、天然水广场白水洋，霞浦滩涂光影如画。' },
  { id: 9,  name: '三明',   pinyin: 'Sanming',   emoji: '🌲', tag: '绿都丹霞',   desc: '中国绿都，泰宁水上丹霞与大金湖山水相映，生态康养胜地。' }
]

const ATTRACTIONS = [
  { id: 1,  city: '厦门', name: '鼓浪屿', emoji: '🏝️', rating: 4.9, location: '厦门市思明区', tags: ['世界文化遗产', '海上花园', '万国建筑'], intro: '闽南明珠，享有「海上花园」「钢琴之岛」「万国建筑博览」之美誉。2017 年列入世界文化遗产，中西合璧的老别墅、悠扬琴声与涛声交织，是厦门最浪漫的名片。', highlights: ['菽庄花园', '日光岩', '皓月园', '钢琴博物馆', '龙头路小吃街'] },
  { id: 2,  city: '厦门', name: '厦门大学', emoji: '🎓', rating: 4.8, location: '厦门市思明区思明南路', tags: ['最美大学', '嘉庚建筑', '人文'], intro: '被誉为「中国最美大学」，红墙绿瓦的嘉庚建筑群与芙蓉湖、建南大礼堂交相辉映，背山面海，书声与海风相伴。', highlights: ['芙蓉湖', '建南大礼堂', '芙蓉隧道涂鸦', '嘉庚楼群'] },
  { id: 3,  city: '厦门', name: '南普陀寺', emoji: '🛕', rating: 4.7, location: '厦门市思明区思明南路', tags: ['闽南名刹', '佛教', '素食'], intro: '闽南佛教胜地，背倚五老峰、面向厦门港，香火鼎盛。寺内素斋远近闻名，登五老峰可俯瞰厦大与海景。', highlights: ['天王殿', '大雄宝殿', '五老峰', '素饼'] },
  { id: 4,  city: '厦门', name: '曾厝垵', emoji: '🏘️', rating: 4.5, location: '厦门市思明区环岛路', tags: ['文艺渔村', '文创', '夜市'], intro: '从传统渔村蜕变为文艺打卡地，狭窄巷弄里藏着文创小店、咖啡馆与各色小吃，夜生活热闹非凡。', highlights: ['文创小店', '海边民宿', '闽南小吃', '民谣酒吧'] },
  { id: 5,  city: '厦门', name: '环岛路', emoji: '🌊', rating: 4.8, location: '厦门市思明区环岛南路', tags: ['滨海公路', '骑行', '日落'], intro: '被誉为「最美马拉松赛道」，一路椰风海韵、碧海金沙，骑行或漫步都极惬意，是看海观日落的绝佳去处。', highlights: ['椰风寨', '白城沙滩', '海景骑行', '日出日落'] },
  { id: 6,  city: '厦门', name: '中山路', emoji: '🏮', rating: 4.4, location: '厦门市思明区中山路', tags: ['骑楼老街', '商业街', '美食'], intro: '厦门历史最悠久的商业街，两侧南洋骑楼连绵成廊，老字号与闽南小吃云集，夜幕下灯火璀璨。', highlights: ['南洋骑楼', '黄则和花生汤', '老字号商铺', '闽南小吃'] },
  { id: 7,  city: '福州', name: '三坊七巷', emoji: '🏮', rating: 4.8, location: '福州市鼓楼区', tags: ['历史文化名街', '明清古建', '名人故居'], intro: '中国十大历史文化名街之一，保存着约 200 座明清古建筑，坊巷纵横，名人辈出，被誉为「里坊制度活化石」与「明清建筑博物馆」。', highlights: ['南后街', '林觉民故居', '水榭戏台', '鱼丸肉燕老店'] },
  { id: 8,  city: '福州', name: '鼓山', emoji: '⛰️', rating: 4.6, location: '福州市晋安区', tags: ['福州名山', '涌泉寺', '摩崖石刻'], intro: '福州「全闽第一山」，山间古树参天、摩崖石刻遍布。千年古刹涌泉寺坐落山腰，登临可俯瞰榕城全景。', highlights: ['涌泉寺', '摩崖石刻', '喝水岩', '眺望台'] },
  { id: 9,  city: '福州', name: '平潭岛', emoji: '🌊', rating: 4.6, location: '福州市平潭县', tags: ['离台最近', '蓝眼泪', '海岛'], intro: '中国大陆距台湾最近的岛屿，海峡对望。每年春夏之交的「蓝眼泪」荧光海奇观如梦似幻，还有石牌洋、仙人井等奇岩景观。', highlights: ['蓝眼泪', '石牌洋', '仙人井', '北港文创村'] },
  { id: 10, city: '福州', name: '上下杭', emoji: '🏘️', rating: 4.4, location: '福州市台江区', tags: ['闽商文化', '古街区', '夜景'], intro: '福州近代商贸中心，闽商文化发祥地之一。古色古香的街区沿河而建，夜景点亮后别有江南水乡韵味。', highlights: ['闽商会馆', '三通桥', '古巷夜景', '传统茶楼'] },
  { id: 11, city: '泉州', name: '开元寺', emoji: '🛕', rating: 4.8, location: '泉州市鲤城区西街', tags: ['千年古刹', '东西塔', '世遗点'], intro: '泉州最古老的寺庙，始建于唐代。东西双塔是泉州城市地标，也是宋元海丝贸易的见证，寺内古树繁花、梵音袅袅。', highlights: ['东西塔', '大雄宝殿', '古桑树', '西街街景'] },
  { id: 12, city: '泉州', name: '清源山', emoji: '⛰️', rating: 4.7, location: '泉州市丰泽区', tags: ['道教名山', '老君岩', '石刻'], intro: '泉州「母亲山」，道教圣地。宋代老君岩造像是我国现存最大的道教石雕像，与弘一法师舍利塔、摩崖石刻共同诉说古城文脉。', highlights: ['老君岩', '弘一法师塔', '天湖', '摩崖石刻'] },
  { id: 13, city: '泉州', name: '洛阳桥', emoji: '🌉', rating: 4.6, location: '泉州市洛江区', tags: ['古代名桥', '海丝遗迹', '世遗点'], intro: '中国四大古桥之一，北宋蔡襄主持建造，首创「筏形基础」「种蛎固基」等造桥技艺，是古代桥梁建筑的杰作。', highlights: ['蔡襄祠', '桥头古榕', '海丝遗迹', '夕阳桥影'] },
  { id: 14, city: '泉州', name: '蟳埔村', emoji: '🌸', rating: 4.7, location: '泉州市丰泽区东海街道', tags: ['簪花围', '蚵壳厝', '民俗'], intro: '海边的古渔村，以「簪花围」头饰和蚵壳厝闻名。蟳埔女头顶鲜花、身着花衣，是闽南民俗的鲜活画卷，近年成为热门打卡地。', highlights: ['簪花围体验', '蚵壳厝', '海蛎小吃', '古渔港'] },
  { id: 15, city: '武夷山', name: '武夷山风景区', emoji: '⛰️', rating: 4.9, location: '南平市武夷山市', tags: ['世界双遗产', '九曲溪', '岩茶'], intro: '世界自然与文化双遗产地。九曲溪竹筏漂流如诗如画，天游峰奇秀，大红袍母树见证岩茶传奇，碧水丹山冠绝东南。', highlights: ['九曲溪竹筏', '天游峰', '大红袍母树', '武夷岩茶', '印象大红袍'] },
  { id: 16, city: '漳州', name: '南靖土楼', emoji: '🏯', rating: 4.8, location: '漳州市南靖县', tags: ['世界文化遗产', '客家土楼', '四菜一汤'], intro: '客家土楼的杰出代表，田螺坑土楼群因四座圆楼环抱一座方楼，被形象称为「四菜一汤」。2008 年列入世界文化遗产，是客家先民智慧的结晶。', highlights: ['田螺坑土楼群', '裕昌楼', '塔下村', '土楼民宿'] },
  { id: 17, city: '漳州', name: '东山岛', emoji: '🏖️', rating: 4.6, location: '漳州市东山县', tags: ['滨海风光', '风动石', '鱼骨沙洲'], intro: '福建最美海岛之一，碧海银滩、渔舟唱晚。风动石奇观、马銮湾沙滩与「鱼骨沙洲」吸引无数游客。', highlights: ['风动石', '马銮湾', '鱼骨沙洲', '海鲜大餐'] },
  { id: 18, city: '龙岩', name: '永定土楼', emoji: '🏯', rating: 4.8, location: '龙岩市永定区', tags: ['世界文化遗产', '客家土楼', '土楼王子'], intro: '客家土楼的核心分布区，「土楼王子」振成楼、承启楼等规模宏大、设计精妙，被誉为「中国古建筑的奇葩」。', highlights: ['振成楼', '承启楼', '洪坑土楼群', '客家擂茶'] },
  { id: 19, city: '龙岩', name: '古田会议旧址', emoji: '🚩', rating: 4.5, location: '龙岩市上杭县古田镇', tags: ['红色圣地', '革命遗址', '教育'], intro: '中国共产党历史上重要会议「古田会议」的召开地，是红色文化的精神坐标，也是爱国主义教育的重要基地。', highlights: ['古田会议会址', '纪念馆', '红色文化', '油菜花田'] },
  { id: 20, city: '莆田', name: '湄洲岛', emoji: '🛕', rating: 4.7, location: '莆田市秀屿区湄洲镇', tags: ['妈祖祖庙', '信俗', '海岛'], intro: '妈祖文化的发祥地，湄洲妈祖祖庙是世界妈祖信众心中的圣地，被誉为「东方麦加」。每年妈祖诞辰，朝圣者络绎不绝。', highlights: ['妈祖祖庙', '妈祖石像', '黄金沙滩', '妈祖诞辰祭典'] },
  { id: 21, city: '宁德', name: '太姥山', emoji: '⛰️', rating: 4.6, location: '宁德市福鼎市', tags: ['海上仙都', '花岗岩峰', '雾凇'], intro: '素称「海上仙都」，花岗岩峰林与海雾云海相映，奇石、幽洞、飞瀑兼备，秋冬时节可赏雾凇奇观。', highlights: ['一线天', '九鲤湖', '夫妻峰', '观日台'] },
  { id: 22, city: '宁德', name: '白水洋', emoji: '💧', rating: 4.6, location: '宁德市屏南县', tags: ['世界地质公园', '天然水上广场', '亲水'], intro: '世界地质公园，数万平方米的平坦河床如天然水上广场，赤脚涉水、泼水嬉戏，是夏日亲水的天堂。', highlights: ['水上广场', '鸳鸯溪', '冲浪漂滑', '亲水嬉戏'] },
  { id: 23, city: '宁德', name: '霞浦滩涂', emoji: '📷', rating: 4.8, location: '宁德市霞浦县', tags: ['最美滩涂', '摄影基地', '光影'], intro: '中国最美滩涂摄影基地，潮涨潮落间，紫菜架、渔排与光影交织成流动的画卷，是摄影爱好者心中的「中国最美滩涂」。', highlights: ['北岐滩涂', '小皓海滩', '沙江S湾', '渔排日落'] },
  { id: 24, city: '三明', name: '泰宁大金湖', emoji: '⛰️', rating: 4.7, location: '三明市泰宁县', tags: ['水上丹霞', '世界自然遗产', '山水'], intro: '水上丹霞的精华所在，碧水环绕赤壁丹崖，乘船游览犹如走进一幅流动的山水画卷，是「中国丹霞」世界自然遗产的重要组成部分。', highlights: ['甘露寺', '水上丹霞', '游船观景', '尚书第'] }
]

const FOODS = [
  { id: 1,  city: '福州', name: '佛跳墙', emoji: '🍲', category: '闽菜头牌', desc: '闽菜之首，选用鲍鱼、海参、花菇等数十种山珍海味，慢火煨制，坛启荤香四溢，「佛闻弃禅跳墙来」由此得名。' },
  { id: 2,  city: '福州', name: '荔枝肉', emoji: '🍖', category: '传统名菜', desc: '将肉切十字花刀炸制成荔枝状，配以酸甜汁，外酥里嫩、酸甜开胃，是福州宴席上的经典。' },
  { id: 3,  city: '福州', name: '鱼丸', emoji: '🍡', category: '小吃', desc: '以鱼肉打浆包裹肉馅，Q 弹爽滑、汤汁鲜美，是福州人的日常美味与乡愁记忆。' },
  { id: 4,  city: '福州', name: '肉燕（太平燕）', emoji: '🥟', category: '小吃', desc: '肉燕皮由猪后腿肉反复捶打成薄如纸的燕皮，包裹肉馅，口感爽脆，福州话「太平」寓意平安吉祥。' },
  { id: 5,  city: '福州', name: '光饼', emoji: '🫓', category: '传统面点', desc: '相传为戚继光抗倭时的干粮，外酥内软、咸香可口，中间穿孔便于穿绳携带，是福州特色面点。' },
  { id: 6,  city: '厦门', name: '沙茶面', emoji: '🍜', category: '面食', desc: '南洋风情的沙茶酱熬制汤底，浓郁微辣，配以鲜虾、鱿鱼、猪肝等浇头，是厦门最具代表性的街头美食。' },
  { id: 7,  city: '厦门', name: '土笋冻', emoji: '🥣', category: '特色冷食', desc: '以海产「土笋」（星虫）熬煮后凝冻而成，晶莹爽滑，蘸蒜蓉酱油醋，是闽南独有的特色凉品。' },
  { id: 8,  city: '厦门', name: '海蛎煎', emoji: '🍳', category: '海鲜', desc: '新鲜海蛎与地瓜粉、鸡蛋煎至金黄，外酥里嫩、鲜香四溢，是闽南沿海家喻户晓的美味。' },
  { id: 9,  city: '厦门', name: '花生汤', emoji: '🥜', category: '甜品', desc: '花生熬煮至软烂、汤色乳白，香甜浓郁，配一根油条，是厦门人最经典的早餐与甜点。' },
  { id: 10, city: '厦门', name: '姜母鸭', emoji: '🦆', category: '药膳', desc: '老姜与番鸭同煲，鸭肉酥烂、姜香浓郁，滋补暖胃，是闽南冬季进补的传统药膳。' },
  { id: 11, city: '泉州', name: '面线糊', emoji: '🍜', category: '早餐', desc: '泉州人的经典早餐，细如发丝的面线煮成糊状，配油条、醋肉、大肠等配料，暖胃又满足。' },
  { id: 12, city: '泉州', name: '烧肉粽', emoji: '🍙', category: '传统', desc: '糯米包裹五花肉、香菇、虾米、栗子等，蒸煮后油润香糯，是闽南端午与日常的节令美味。' },
  { id: 13, city: '泉州', name: '润饼（薄饼）', emoji: '🌯', category: '传统', desc: '薄如蝉翼的润饼皮包裹多种时令菜料，清爽鲜香，是闽南春卷的经典吃法。' },
  { id: 14, city: '武夷山', name: '大红袍', emoji: '🍵', category: '岩茶', desc: '武夷岩茶之王，生于峭壁岩缝，有独特「岩骨花香」。母树珍稀，茶汤橙黄明亮、回甘悠长。' },
  { id: 15, city: '龙岩', name: '客家酿豆腐', emoji: '🧈', category: '客家菜', desc: '客家名菜，豆腐中间酿入肉馅，煎至金黄再焖煮，外香内嫩、豆香肉香交融。' },
  { id: 16, city: '闽南', name: '四果汤', emoji: '🧊', category: '甜品', desc: '闽南夏季消暑圣品，莲子、银耳、绿豆、仙草等配蜜水与冰沙，清甜解暑。' }
]

const CULTURES = [
  { id: 1,  city: '闽南', name: '闽南文化', emoji: '🎭', category: '地域文化', desc: '以闽南语、南音、红砖厝为代表，「爱拼才会赢」的拼搏精神与浓厚的宗族文化，塑造了独特而鲜活的闽南气质。' },
  { id: 2,  city: '莆田', name: '妈祖文化', emoji: '🛕', category: '信俗', desc: '妈祖林默娘「立德、行善、大爱」的精神深入人心，妈祖信俗被列入人类非物质文化遗产，湄洲岛祖庙是世界信众心中的圣地。' },
  { id: 3,  city: '龙岩', name: '客家文化', emoji: '🏯', category: '地域文化', desc: '客家先民「耕读传家」，土楼围屋凝聚家族向心力，山歌、擂茶与崇文重教的传统，是中华文化的璀璨一支。' },
  { id: 4,  city: '泉州', name: '海丝文化', emoji: '⚓', category: '海洋文化', desc: '泉州是宋元中国的世界海洋商贸中心，古刺桐港曾帆樯云集，多元宗教与海洋贸易在此交融，是海上丝绸之路的起点。' },
  { id: 5,  city: '武夷山', name: '茶文化', emoji: '🍵', category: '茶文化', desc: '福建是乌龙茶的故乡，武夷岩茶「岩骨花香」、安溪铁观音「兰花香韵」，工夫茶道与「茶和天下」的理念流传至今。' },
  { id: 6,  city: '漳州', name: '土楼建筑文化', emoji: '🏯', category: '建筑', desc: '客家土楼「聚族而居、防卫合一」，生土夯筑却能屹立数百年，2008 年列入世界文化遗产，被誉为「中国古建筑的奇葩」。' },
  { id: 7,  city: '福州', name: '闽剧', emoji: '🎭', category: '戏曲', desc: '福州地方戏曲，唱腔婉转、做工细腻，是国家级非物质文化遗产，在坊巷戏台间传唱百年。' },
  { id: 8,  city: '泉州', name: '高甲戏', emoji: '🎭', category: '戏曲', desc: '以丑角表演见长的闽南地方戏，幽默诙谐、武打精彩，国家级非物质文化遗产。' },
  { id: 9,  city: '闽南', name: '歌仔戏（芗剧）', emoji: '🎭', category: '戏曲', desc: '流行于闽南与台湾的剧种，唱腔优美、贴近生活，是两岸同胞共同的文化记忆与情感纽带。' },
  { id: 10, city: '莆田', name: '莆仙戏', emoji: '🎭', category: '戏曲', desc: '现存最古老的戏曲剧种之一，保留大量宋元南戏遗响，被称作中国戏曲的「活化石」。' },
  { id: 11, city: '泉州', name: '惠安女服饰', emoji: '👒', category: '民俗', desc: '惠安女「封建头、民主肚、节约衣、浪费裤」的独特服饰，配黄斗笠与花头巾，是国家级非物质文化遗产与闽南海边的靓丽风景。' },
  { id: 12, city: '泉州', name: '蟳埔女簪花', emoji: '🌸', category: '民俗', desc: '蟳埔女以鲜花盘成「簪花围」，日日簪花、四季不败，与蚵壳厝共同构成闽南渔村的独特风情。' },
  { id: 13, city: '福州', name: '脱胎漆器', emoji: '🎨', category: '非遗', desc: '福州「三宝」之一，脱胎髹饰技艺轻巧坚固、漆色绚烂，被列入国家级非物质文化遗产，享誉海内外。' },
  { id: 14, city: '龙岩', name: '红色文化', emoji: '🚩', category: '红色文化', desc: '福建是革命老区，古田会议确立思想建党、政治建军原则，红色基因在这片土地上代代传承。' }
]

const PLANS = {
  '3': {
    title: '经典闽南 · 3 日游',
    subtitle: '厦门 + 泉州，山海与人文交织的经典线路',
    days: [
      { day: 1, title: '厦门 · 邂逅鼓浪屿', spots: ['鼓浪屿', '中山路'], foods: ['沙茶面', '花生汤'], tip: '建议一早乘轮渡上岛，预留一整天慢慢逛。' },
      { day: 2, title: '厦门 · 学府与海风', spots: ['厦门大学', '南普陀寺', '环岛路', '曾厝垵'], foods: ['海蛎煎', '土笋冻'], tip: '环岛路适合傍晚骑行，看海景日落。' },
      { day: 3, title: '泉州 · 宋元海丝', spots: ['开元寺', '西街', '洛阳桥', '蟳埔村'], foods: ['面线糊', '烧肉粽'], tip: '蟳埔村可体验簪花围，拍照极出片。' }
    ]
  },
  '5': {
    title: '山海人文 · 5 日游',
    subtitle: '厦门 - 泉州 - 漳州 - 莆田，山海人文全景',
    days: [
      { day: 1, title: '厦门 · 鼓浪屿', spots: ['鼓浪屿', '中山路'], foods: ['沙茶面', '花生汤'], tip: '上岛前记得预订轮渡票。' },
      { day: 2, title: '厦门 · 环岛漫游', spots: ['厦门大学', '南普陀寺', '环岛路', '曾厝垵'], foods: ['海蛎煎', '土笋冻'], tip: '白城沙滩适合看海上日落。' },
      { day: 3, title: '泉州 · 古城访古', spots: ['开元寺', '清源山', '蟳埔村'], foods: ['面线糊', '润饼'], tip: '西街夜晚热闹，可夜游古城。' },
      { day: 4, title: '漳州 · 土楼传奇', spots: ['南靖土楼', '东山岛'], foods: ['客家酿豆腐', '四果汤'], tip: '土楼建议住一晚，感受客家夜生活。' },
      { day: 5, title: '莆田 · 妈祖圣地', spots: ['湄洲岛'], foods: ['妈祖平安面'], tip: '湄洲岛需乘船上岛，注意返程时间。' }
    ]
  },
  '7': {
    title: '八闽全景 · 7 日深度游',
    subtitle: '福州 - 武夷山 - 三明 - 厦门 - 漳州 - 泉州，纵览八闽',
    days: [
      { day: 1, title: '福州 · 坊巷古韵', spots: ['三坊七巷', '上下杭'], foods: ['佛跳墙', '肉燕'], tip: '三坊七巷适合慢慢逛，体验闽剧与老字号。' },
      { day: 2, title: '福州 · 山海之间', spots: ['鼓山', '平潭岛'], foods: ['鱼丸', '荔枝肉'], tip: '平潭蓝眼泪多在春夏之交出现。' },
      { day: 3, title: '武夷山 · 碧水丹山', spots: ['武夷山风景区'], foods: ['大红袍'], tip: '九曲溪竹筏需提前预约。' },
      { day: 4, title: '三明 · 水上丹霞', spots: ['泰宁大金湖'], foods: ['客家酿豆腐'], tip: '乘船游湖，感受水上丹霞之美。' },
      { day: 5, title: '厦门 · 海上花园', spots: ['鼓浪屿', '中山路'], foods: ['沙茶面', '花生汤'], tip: '预留一天给鼓浪屿。' },
      { day: 6, title: '漳州 · 土楼人家', spots: ['南靖土楼'], foods: ['客家酿豆腐', '四果汤'], tip: '田螺坑「四菜一汤」观景台必去。' },
      { day: 7, title: '泉州 · 海丝终点', spots: ['开元寺', '洛阳桥', '蟳埔村'], foods: ['面线糊', '烧肉粽'], tip: '为八闽之行画上圆满句号。' }
    ]
  }
}

// 景点真实图片（Wikimedia Commons，Special:FilePath 直链）
const IMAGES = {
  1: "https://commons.wikimedia.org/wiki/Special:FilePath/Gulangyu%20island.jpg?width=960",
  2: "https://commons.wikimedia.org/wiki/Special:FilePath/Panoramatic%20view%20of%20xiamen%20university%20at%20sunset.jpg?width=960",
  3: "https://commons.wikimedia.org/wiki/Special:FilePath/Nanputuo%20Temple%2C%20Xiamen.jpg?width=960",
  4: "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%9B%BE%E5%8E%9D%E5%9E%B5%E7%89%8C%E5%9D%8A%E5%86%85.jpg?width=960",
  5: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8E%A6%E9%97%A8%E7%8E%AF%E5%B2%9B%E8%B7%AF%E6%B2%99%E6%BB%A9.jpg?width=960",
  6: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhongshan%20Road%2C%20Xiamen%2011.jpg?width=960",
  7: "https://commons.wikimedia.org/wiki/Special:FilePath/Fuzhou%20Three%20Lanes%20and%20Seven%20Alleys%20Nightview.jpg?width=960",
  8: "https://commons.wikimedia.org/wiki/Special:FilePath/Yongquan%20Temple%20in%20Gushan%20Mountain%2C%20Fuzhou.jpg?width=960",
  9: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%A4%A7%E7%BB%83%E5%B2%9B%E4%B8%8A%E7%9C%8B%E5%B9%B3%E6%BD%9D%E5%85%AC%E9%93%81%E5%A4%A7%E6%A1%A5%2002.jpg?width=960",
  10: "https://commons.wikimedia.org/wiki/Special:FilePath/20181004%20%E7%A6%8F%E5%B7%9E%E4%B8%8A%E4%B8%8B%E6%9D%AD%2004.jpg?width=960",
  11: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20courtyard%20of%20Quanzhou%20Kaiyuan%20Temple%2020170727.jpg?width=960",
  12: "https://commons.wikimedia.org/wiki/Special:FilePath/Hongyi%20statue%20on%20Qingyuan%20Mountain%2C%20Quanzhou.jpg?width=960",
  13: "https://commons.wikimedia.org/wiki/Special:FilePath/Luoyang%20Bridge%20%28Quanzhou%29%2020170727.jpg?width=960",
  14: "https://commons.wikimedia.org/wiki/Special:FilePath/Xunpu%20Village%201.jpg?width=960",
  15: "https://commons.wikimedia.org/wiki/Special:FilePath/Wuyi%20Mountains%20Sea%20of%20clouds.jpg?width=960",
  16: "https://commons.wikimedia.org/wiki/Special:FilePath/Tianluokeng%20Tulou%20Cluster.JPG?width=960",
  17: "https://commons.wikimedia.org/wiki/Special:FilePath/%E4%B8%9C%E5%B1%B1%E5%B2%9B%E7%81%AF%E5%A1%94.jpg?width=960",
  18: "https://commons.wikimedia.org/wiki/Special:FilePath/20260323%20%E7%A6%8F%E5%BB%BA%E5%9C%9F%E6%A5%BC%EF%BC%88%E9%AB%98%E5%8C%97%E5%9C%9F%E6%A5%BC%E7%BE%A4%EF%BC%89.jpg?width=960",
  19: "https://commons.wikimedia.org/wiki/Special:FilePath/Gutian%20compound.jpg?width=960",
  20: "https://commons.wikimedia.org/wiki/Special:FilePath/%E7%A5%88%E5%B9%B4%E6%9C%9F%E9%97%B4%E7%9A%84%E6%B9%84%E6%B4%B2%E5%A6%88%E7%A5%96%E7%A5%96%E5%BA%991.jpg?width=960",
  21: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Taimu%2C%20Fuding%2020230827.jpg?width=960",
  22: "https://commons.wikimedia.org/wiki/Special:FilePath/Pingnan%20Baishuiyang%202014.08.02%2016-23-09.jpg?width=960",
  23: "https://commons.wikimedia.org/wiki/Special:FilePath/Xiaohao%20Beach%2C%20Xiapu%2020230827.jpg?width=960",
  24: "https://commons.wikimedia.org/wiki/Special:FilePath/Along%20the%20Dajinhu%20%2820170119093428%29.jpg?width=960"
}

function withImages(a) {
  return Object.assign({}, a, { image: IMAGES[a.id] || '' })
}

function getPlan(days) {
  days = String(days)
  if (PLANS[days]) return PLANS[days]
  const keys = Object.keys(PLANS).sort((a, b) => Math.abs(Number(a) - Number(days)) - Math.abs(Number(b) - Number(days)))
  return PLANS[keys[0]]
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = {
  getHome() {
    return {
      stats: { cities: CITIES.length, attractions: ATTRACTIONS.length, foods: FOODS.length, cultures: CULTURES.length },
      featured_attractions: ATTRACTIONS.filter(a => a.rating >= 4.8).slice(0, 4).map(withImages),
      featured_foods: FOODS.slice(0, 4),
      featured_cultures: CULTURES.slice(0, 4)
    }
  },
  getCities() {
    return CITIES
  },
  getAttractions(city) {
    const list = city ? ATTRACTIONS.filter(a => a.city === city) : ATTRACTIONS
    return list.map(withImages)
  },
  getFoods(city) {
    return city ? FOODS.filter(f => f.city === city) : FOODS
  },
  getCultures(city) {
    return city ? CULTURES.filter(c => c.city === city) : CULTURES
  },
  getPlan(days) {
    return getPlan(days)
  },
  getLucky() {
    return { attraction: withImages(pick(ATTRACTIONS)), food: pick(FOODS), culture: pick(CULTURES) }
  },
  search(q) {
    const key = (q || '').trim().toLowerCase()
    if (!key) return { attractions: [], foods: [], cultures: [] }
    const low = s => (s || '').toLowerCase()
    const fa = ATTRACTIONS.filter(a =>
      (low(a.name) + low(a.city) + low(a.location) + low(a.intro) +
        (a.tags || []).join(' ') + (a.highlights || []).join(' ')).includes(key)).map(withImages)
    const ff = FOODS.filter(f =>
      (low(f.name) + low(f.city) + low(f.category) + low(f.desc)).includes(key))
    const fc = CULTURES.filter(c =>
      (low(c.name) + low(c.city) + low(c.category) + low(c.desc)).includes(key))
    return { attractions: fa, foods: ff, cultures: fc }
  }
}
