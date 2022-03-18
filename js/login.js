const login = document.querySelector("form");
const h2 = document.querySelector("h2");
const username = document.querySelector("form input");

function logIn() {
    event.preventDefault();
    const userName = username.value;
    localStorage.setItem("USERNAME", userName);
    login.classList.add("hidden");
    greeting();
}

function greeting() {
    const savedName = localStorage.getItem("USERNAME");
    h2.innerHTML = `Nice to meet you, ${savedName}!`;
    h2.classList.remove("hidden");
}

login.addEventListener("submit", logIn);

const getName = localStorage.getItem("USERNAME");

if (getName === null) {
    login.classList.remove("hidden");
} else {
    login.classList.add("hidden");
    greeting();
}