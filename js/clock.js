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
    const opt = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const day = Intl.DateTimeFormat('ko-KR', opt).format(time);

    today.innerText = `${day}`;
};

getClock();
setInterval(getClock, 1000);

getToday();


