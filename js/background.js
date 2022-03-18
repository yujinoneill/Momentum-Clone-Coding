const images = [
    {
        name: "0.jpg",
        place: "Lower Antelope Canyon, Page, United States",
        photographer: "Ashim D’Silva",
    },
    {
        name: "1.jpg",
        place: "Playa de la Misericordia, Spain",
        photographer: "Quino Al",
    },
    {
        name: "2.jpg",
        place: "Cappadocia, Turky",
        photographer: "Daniela Cuevas",
    },
    {
        name: "3.jpg",
        place: "Zillertal Alps, Italy",
        photographer: "eberhard",
    },
    {
        name: "4.jpg",
        place: "Monte Biaena, Italy",
        photographer: "Cristina Gottardi",
    },
    {
        name: "5.jpg",
        place: "Pfeiffer Beach, United States",
        photographer: "Kace Rodriguez",
    },
    {
        name: "6.jpg",
        place: "Seiser Alm, Kastelruth, Italy",
        photographer: "Karsten Würth",
    },
]

const randomNumber = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(image/${images[randomNumber].name})`;

const place = document.querySelector("#img span:first-child");
const photographer = document.querySelector("#img span:last-child");

place.innerHTML = images[randomNumber].place;
photographer.innerHTML = images[randomNumber].photographer;