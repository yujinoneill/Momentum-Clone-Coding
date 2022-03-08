const clock = document.querySelector("#clock span:first-child"); //getElementId를 이용하면 # 없이도 사용 가능
const today = document.querySelector("#clock span:last-child");

function getClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const min = String(time.getMinutes()).padStart(2, "0");
    const sec = String(time.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${min}:${sec}`;
};

function getToday() {
    const time = new Date();
    const monthOpt = { month: 'long' };
    const dayOpt = { weekday: 'long' };
    const month = Intl.DateTimeFormat('ko-KR', monthOpt).format(time);
    const day = Intl.DateTimeFormat('ko-KR', dayOpt).format(time);

    today.innerText = `${time.getFullYear()}년 ${month} ${time.getDate()}일 ${day}`;
};

getClock();
setInterval(getClock, 1000);

getToday();


