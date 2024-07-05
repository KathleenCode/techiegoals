const date = new Date();

const day = document.querySelector("#day");
const day1 = day.dataset.day;

const hours = document.querySelector("#hours");
const h1 = hours.dataset.hours;

const minutes = document.querySelector("#minutes");
const m1 = minutes.dataset.minutes;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDay = date.getDay();
const currentHour = date.getHours();
const currentMinute = date.getMinutes();

day.innerHTML = days[currentDay];
hours.innerHTML = currentHour;
minutes.innerHTML = currentMinute;