// 小物系
const writeText = (id: string, text: string) => {
    const e = document.getElementById(id);
    if (text && e) e.innerText = text;
}

const days = ["日", "月", "火", "水", "木", "金", "土"]

// 時計表示
const updateTime = () => {
    const now = new Date();

    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");

    const clockTimeView = `${hh}:${mm}`;

    writeText("time-text", clockTimeView);

    const dd = String(now.getDate()).padStart(2, "0");
    const m_mm = String(now.getMonth() + 1).padStart(2, "0");
    const day = days[now.getDay()];

    const clockDateView = `${m_mm}月${dd}日 (${day})`
    writeText("date-text", clockDateView);

    // 再描画用
    const secound = now.getSeconds();
    const delaySecound = 60 - secound;
    setTimeout(updateTime, delaySecound * 1000)
}
updateTime();