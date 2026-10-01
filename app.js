const days = [
  {
    id: "1002", tab: "10月2日", kicker: "抵达深圳", title: "入住、晚饭与糖水", meta: ["18:00 后", "深圳", "抵达日"],
    items: [
      ["18:00—19:15", "入住与放行李", "洲曼酒店（深圳罗湖东门老街店），人民北路3129号洪湖大厦。", "固定"],
      ["19:15—20:45", "蘩楼晚饭", "步行约10—12分钟到东门晒布地铁店；红米肠、虾饺、烧卖、叉烧包、萝卜糕。", "固定"],
      ["20:45—22:15", "蛇口百草堂", "打车到蛇口新街207号，吃杨枝甘露、龟苓膏、双皮奶等。排队久就外带。", "可撤"],
      ["22:15 后", "回酒店并核对材料", "通行证、签注、身份证、流量、交通卡、充电宝；查智能签注点。", "固定"]
    ], fallback: "抵达晚于19:30：蘩楼照常，百草堂缩短或取消；不要牺牲第二天休息。"
  },
  {
    id: "1003", tab: "10月3日", kicker: "九龙 → 港岛", title: "深水埗、维港与太平山", meta: ["09:15 出发", "罗湖往返", "步行较多"],
    items: [
      ["09:15—11:35", "罗湖过关 → 深水埗", "09:15 出发；罗湖→九龙塘→太子→深水埗。", "固定"],
      ["11:35—13:30", "Club SIM + 深水埗午餐", "福华街门店查询卡片，再到新香园、公和荳品厂用餐并拍摄街景。", "固定"],
      ["14:00—15:30", "维港海滨与 K11", "星光大道→K11 MUSEA→钟楼→五支旗杆。", "固定"],
      ["15:30—16:35", "海港城拍照与逛街", "玻璃楼梯拍维港，再到广东道外街拍 Dior、Chanel、Fendi 与车流。", "固定"],
      ["16:50—17:50", "天星小轮 → 中环机位", "船上拍两岸；遮打花园与 The Henderson 各停留10—15分钟。", "可撤"],
      ["18:05—19:40", "山顶缆车与太平山", "排队超过45分钟改15路巴士或出租车；能见度差则取消。", "固定"],
      ["20:25—22:40", "返深并续签", "金钟→罗湖；过关后到已核实的24小时智能签注点，确认新签注写入证件。", "硬任务"]
    ], fallback: "下雨：缩短海滨，增加 K11/海港城；太平山能见度差改 IFC。赶不上罗湖口岸时，打车到皇岗口岸。"
  },
  {
    id: "1004", tab: "10月4日", kicker: "香港迪士尼", title: "12:00 入园计划", meta: ["09:15 出发", "指定日门票", "最迟22:00离园"],
    items: [
      ["09:15—12:30", "罗湖 → 迪士尼入园", "罗湖→红磡→南昌→欣澳→迪士尼；安检并用电子票二维码入园。", "固定"],
      ["12:30—14:30", "魔雪奇缘世界", "根据实时排队时间，在魔雪奇幻之旅和雪岭滑雪橇中选择。", "固定"],
      ["14:30—15:15", "午餐与休息", "坐下来吃饭，补水充电，不边走边赶项目。", "固定"],
      ["15:15—18:30", "项目二选一 + 表演", "迷离大宅、灰熊山、铁甲奇侠选两个，再看巡游或一场表演。", "弹性"],
      ["18:30—夜间", "城堡亮灯与夜间汇演", "美国小镇大街和城堡拍照；汇演前提前找位。", "固定"],
      ["汇演后", "立即返深", "不再购物；原路回罗湖，最迟22:00离园。", "硬边界"]
    ], fallback: "离园太晚或港铁延误：直接打车到皇岗口岸港方口岸区，过关后再打车回罗湖。"
  },
  {
    id: "1005", tab: "10月5日", kicker: "坚尼地城 → 深圳", title: "拍照、申请 ZA、见朋友", meta: ["09:15 出发", "14:05 返程", "18:00 聚餐"],
    items: [
      ["09:15—11:40", "罗湖 → 坚尼地城", "东铁线到金钟，换港岛线到坚尼地城站。", "固定"],
      ["11:40—12:15", "科士街高位机位", "C口左转进临时游乐场／篮球场，隔网孔或举高手机拍，绝不翻栏。", "固定"],
      ["12:30—13:00", "Winstons Coffee", "拍 HONG KONG BE HAPPY 招牌、科士街路牌与红色的士。", "固定"],
      ["13:00—13:45", "午餐 + ZA Bank", "先申请访港旅客储蓄账户，成功后继续投资账户；审批不保证当场完成。", "硬任务"],
      ["13:45—14:05", "海旁短走", "看申请状态，拍海面、电车和旧楼；14:05准时返程。", "可撤"],
      ["14:05—17:30", "返深与休息", "港岛线→金钟→东铁线→罗湖；不再追加香港区域。", "固定"],
      ["18:00—20:30", "与朋友晚餐", "餐厅与区域由你们现场确认。", "固定"]
    ], fallback: "银行补件不原地等；保留申请编号，按通知继续。返程晚则皇岗过关后直接打车去聚餐。"
  },
  {
    id: "1006", tab: "10月6日", kicker: "深圳 → 北京", title: "水贝与 17:30 航班", meta: ["08:45 开始", "12:30 收尾", "15:00 到 T3"],
    items: [
      ["08:45—10:00", "退房、寄存、去水贝", "行李留酒店；导航金展珠宝广场。", "固定"],
      ["10:00—11:15", "金展珠宝广场", "负一楼和一楼看热门款、古法、小克重；记录料价、克重与工费。", "固定"],
      ["11:15—12:10", "水贝万山", "一楼黄金、二楼翡翠、三楼银饰；只看感兴趣楼层。", "固定"],
      ["12:10—12:30", "金座地下商圈", "只有时间充足才去；12:30无条件结束。", "可撤"],
      ["12:30—13:45", "午饭、取行李、叫车", "如发生购买或复称，午饭改打包。", "硬边界"],
      ["13:45—15:00", "打车前往宝安机场 T3", "国庆返程留足拥堵余量；13:45后不再考虑地铁。", "固定"],
      ["15:00—17:30", "值机、托运、安检", "前往登机口，17:30飞北京。", "固定"]
    ], fallback: "金座是第一取消项。贵重首饰要求票据写清商户、克重、金价、工费和品名，随身携带不托运。"
  }
];

const photos = [
  ["1003","14:00—14:30","星光大道 · 维港","沿海滨向西，人物靠栏杆，背景保留港岛天际线和海面。先点脸测光，再略降曝光。",["广角全景","HDR","下午侧光"]],
  ["1003","15:10—15:30","钟楼 · 五支旗杆","钟楼、绿色天星小轮与维港一起入画，利用旗杆和栏杆做前景。",["中焦","港风","快速完成"]],
  ["1003","15:30—16:00","海港城玻璃楼梯","钟楼对面海港城入口上二楼露台。人站楼梯中段，摄影者站稍高处，把小轮与港岛楼群收入背景。",["人像焦段","竖构图","阴影优先"]],
  ["1003","16:00—16:35","广东道外街","Dior、Chanel、Fendi 店面、护栏和红色的士；摄影者与人物都留在人行道。",["长焦压缩","等车经过","不进车道"]],
  ["1003","16:50—17:10","天星小轮","上船找临窗或船尾且不挡通行的位置，用窗框构图拍海面与城市。",["窗框","动态快照","避免挡路"]],
  ["1003","17:25—17:50","遮打花园 · The Henderson","J2附近先拍绿地与摩天楼，再步行到2 Murray Road拍玻璃装置和流线外观。",["超广角","建筑线条","可临时撤"]],
  ["1003","18:45—19:40","太平山夜景","先拍维港广角全景，再补少量栏杆边人物剪影；不要长时间占位。",["夜景模式","压高光","人物剪影"]],
  ["1004","12:30—14:30","魔雪奇缘世界","建筑、喷泉与拱门做层次；先玩项目，路过再拍，不专门排空景。",["彩色建筑","顺路拍","避免逆光脸黑"]],
  ["1004","18:30—夜间","城堡 · 美国小镇大街","天黑前拍街道纵深，亮灯后拍城堡正面；汇演只录短片。",["街道中轴","夜景","提前占位"]],
  ["1005","11:40—12:15","科士街高位机位","坚尼地城C口左转进入临时游乐场。画面包含Pizzeria Italia、域多利道街牌、车流和海。",["长焦","隔网孔","不翻围栏"]],
  ["1005","12:30—13:00","Winstons Coffee","11 Davis Street 转角拍招牌和科士街路牌，等红色的士经过；站在人行道内侧。",["中焦","连拍","等红色的士"]]
];

const tasks = [
  ["pass-valid","核对通行证与首个签注","续签当晚通行证至少剩110天；10月3日已有一次有效签注。","出发前"],
  ["machine","确认智能签注资格与机器","拨12367，并在深圳公安地图确认罗湖区24小时点位。","10.02"],
  ["disney","迪士尼票、预约与 App","指定日门票、到访预约、绑定电子票并保存离线二维码。","出发前"],
  ["network","购买支付宝香港流量包","约¥10/天、3GB；核对计时规则，内地主卡开港澳漫游。","10.02"],
  ["club-app","安装 Club SIM App","要买 Club SIM，不是 csl × 7‑Eleven；现场核对最低续期包。","出发前"],
  ["za-app","准备 ZA Bank 材料","身份证原件、同号内地储蓄卡、可漫游手机号、出入境记录PDF。","出发前"],
  ["renew-1","返深后续办签注","10月3日晚办理并再次读取证件，确认10月4日签注已写入。","10.03"],
  ["renew-2","确认10月5日签注","如需要新的单次签注，10月4日晚返深后再次办理。","10.04"],
  ["za-submit","提交 ZA 储蓄与投资账户","在香港境内完成；审核没结束也要按14:05返深。","10.05"],
  ["checkin","完成航班线上值机","查看10月6日航班、天气、拥堵和酒店寄存。","10.05"],
  ["airport","15:00 前抵达宝安 T3","12:30离开水贝；13:45打车出发。","10.06"]
];

let activeDay = "1002";
let photoFilter = "all";
let onlyUnfinished = false;
const completed = new Set(JSON.parse(localStorage.getItem("hk-trip-tasks") || "[]"));

function renderDays() {
  const tabs = document.querySelector("#day-tabs");
  tabs.innerHTML = days.map(d => `<button class="day-tab ${d.id === activeDay ? "active" : ""}" role="tab" aria-selected="${d.id === activeDay}" data-day="${d.id}">${d.tab}</button>`).join("");
  const day = days.find(d => d.id === activeDay);
  document.querySelector("#day-kicker").textContent = day.kicker;
  document.querySelector("#day-title").textContent = day.title;
  document.querySelector("#day-meta").innerHTML = day.meta.map(m => `<span>${m}</span>`).join("");
  document.querySelector("#schedule-list").innerHTML = day.items.map(item => {
    const drop = ["可撤","弹性"].includes(item[3]);
    return `<div class="schedule-item"><div class="schedule-time">${item[0]}</div><div><h4>${item[1]}</h4><p>${item[2]}</p></div><span class="tag ${drop ? "drop" : ""}">${item[3]}</span></div>`;
  }).join("");
  document.querySelector("#fallback").innerHTML = `<strong>当天预案</strong><p>${day.fallback}</p>`;
  tabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => { activeDay = btn.dataset.day; renderDays(); }));
}

function renderPhotos() {
  const filters = [["all","全部"],["1003","10月3日"],["1004","10月4日"],["1005","10月5日"]];
  document.querySelector("#photo-filters").innerHTML = filters.map(f => `<button class="filter-button ${photoFilter === f[0] ? "active" : ""}" data-filter="${f[0]}">${f[1]}</button>`).join("");
  const visible = photos.filter(p => photoFilter === "all" || p[0] === photoFilter);
  document.querySelector("#photo-grid").innerHTML = visible.map((p,i) => `<article class="photo-card"><span class="photo-index">SHOT ${String(i+1).padStart(2,"0")} · 10.${p[0].slice(2)}</span><div><span class="photo-time">${p[1]}</span><h3>${p[2]}</h3><p>${p[3]}</p><div class="photo-tip">${p[4].map(t=>`<span>${t}</span>`).join("")}</div></div></article>`).join("");
  document.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => { photoFilter = btn.dataset.filter; renderPhotos(); }));
}

function renderTasks() {
  const visible = tasks.filter(t => !onlyUnfinished || !completed.has(t[0]));
  document.querySelector("#task-list").innerHTML = visible.map(t => `<div class="task-item ${completed.has(t[0]) ? "done" : ""}"><input type="checkbox" id="${t[0]}" ${completed.has(t[0]) ? "checked" : ""}><label for="${t[0]}"><strong>${t[1]}</strong><span>${t[2]}</span></label><span class="task-date">${t[3]}</span></div>`).join("") || `<div class="task-item"><span>✓</span><label><strong>全部完成</strong><span>当前没有未完成事项。</span></label></div>`;
  document.querySelector("#task-progress").textContent = `${completed.size} / ${tasks.length}`;
  document.querySelector("#unfinished-only").textContent = onlyUnfinished ? "显示全部" : "只看未完成";
  document.querySelectorAll(".task-item input").forEach(input => input.addEventListener("change", () => {
    input.checked ? completed.add(input.id) : completed.delete(input.id);
    localStorage.setItem("hk-trip-tasks", JSON.stringify([...completed]));
    renderTasks();
  }));
}

document.querySelector("#unfinished-only").addEventListener("click", () => { onlyUnfinished = !onlyUnfinished; renderTasks(); });
renderDays();
renderPhotos();
renderTasks();
