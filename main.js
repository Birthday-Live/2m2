let eventsData = {};

async function loadEvents() {
    const res = await fetch("events.json");
    eventsData = await res.json();
}

function searchYear() {
    const year = document.getElementById("yearInput").value.trim();
    const eventTitle = document.getElementById("eventTitle");
    const eventContent = document.getElementById("eventContent");

    if (!year) {
        eventTitle.textContent = "请输入年份";
        eventContent.textContent = "例如：1943";
        return;
    }

    if (!eventsData[year]) {
        eventTitle.textContent = `${year} 年 · 二月二日`;
        eventContent.textContent = "超出范围（1800–2026）";
        return;
    }

    eventTitle.textContent = `${year} 年 · 二月二日`;
    eventContent.textContent = eventsData[year];
}

document.getElementById("searchBtn").addEventListener("click", searchYear);

// 回车也能搜索
document.getElementById("yearInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") searchYear();
});

loadEvents();