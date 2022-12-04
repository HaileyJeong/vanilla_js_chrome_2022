const clock = document.getElementById("clock");
const today = document.getElementById("today");
const getmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function bgclock() {
  const date = new Date ();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

bgclock();
setInterval(bgclock, 1000);

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = getmonth[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0"); 
  today.innerText = (`${day} ${month} ${year}`);
}

getToday();