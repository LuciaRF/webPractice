const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggleElement = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

toggleElement.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    toggleElement.innerText = toggleElement.innerText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';

    // e.target.innerText === toggleElement

    if(toggleElement.innerText === "Light Mode"){
        html.classList.add('dark');
    }
    else{
        html.classList.remove('dark');
    }
    
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >=13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,60,0,360)}deg)`;

    timeElement.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);