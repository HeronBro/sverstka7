let data = new Date()

console.log(data);

console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.getDay());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getTime());



console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
console.log(`${data.getDate()}:${data.getMonth()}:${data.getFullYear()}`);


let myDate = new Date(2018);
console.log(myDate.getFullYear());

let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

setInterval(() => {



let finishYear = new Date(2025, 0, 0);
let nowYear = new Date();

let diference = finishYear.getTime() - nowYear.getTime();

days.textContent = (diference / 1000 /60 /60 /24).toFixed(0)
hours.textContent =((diference / 1000 / 60 / 60) %24).toFixed(0)
minutes.textContent = ((diference / 1000 /60) %60).toFixed(0)
seconds.textContent = ((diference / 1000)% 60 ).toFixed(0)
}, 1000)