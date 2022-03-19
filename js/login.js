const login = document.querySelector("#login");
const welcome = document.querySelector("#welcome");
const hello = document.querySelector("#welcome span");
const username = document.querySelector("#login input");
const btn = document.querySelector("#welcomeBtn")

const USERNAME = "USERNAME";
const HIDDEN = "hidden";

function logIn() {
    event.preventDefault();
    const userName = username.value;
    localStorage.setItem(USERNAME, userName);
    login.classList.add(HIDDEN);
    greeting();
}

function greeting() {
    const savedName = localStorage.getItem(USERNAME);
    hello.innerHTML = `Nice to meet you, ${savedName}!`;
    welcome.classList.remove(HIDDEN);
}

login.addEventListener("submit", logIn);

const getName = localStorage.getItem(USERNAME);

if (getName === null) {
    login.classList.remove(HIDDEN);
} else {
    login.classList.add(HIDDEN);
    greeting();
}

function logout() {
    localStorage.removeItem(USERNAME);
    welcome.classList.add(HIDDEN);
    login.classList.remove(HIDDEN);
    username.value = "";
}

btn.addEventListener("click", logout);
