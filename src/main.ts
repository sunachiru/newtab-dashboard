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

// Link表示
const updateLinks = () => {
    const links = JSON.parse(localStorage.getItem('links') || '[]');
    const ul = document.getElementById("links");
    ul!.innerHTML = "";
    for (let i = 0; i < links.length; i++) {
        if(ul) ul.innerHTML += `<li><a href="${links[i].url}">${links[i].title}</a></li>`
    }
}

const addLink = () => {
    const title = window.prompt("タイトル");
    const url = title ? window.prompt("URL") : null;
    if (title && url){
        const links = JSON.parse(localStorage.getItem('links') || '[]');
        links.push({
            title: title,
            url: url
        });
        localStorage.setItem('links', JSON.stringify(links));
        updateLinks();
    }
}

const showRemoveLinkDialog = () => {
    const num = window.prompt("index");
    removeLink(Number(num));
}

const removeLink = (i: number) => {
    const links = JSON.parse(localStorage.getItem('links') || '[]');
    links.splice(i, 1);
    localStorage.setItem("links", JSON.stringify(links));
    updateLinks()
}

document.getElementById("addBtn")?.addEventListener("click", addLink);
document.getElementById("removeBtn")?.addEventListener("click", showRemoveLinkDialog);

updateLinks();