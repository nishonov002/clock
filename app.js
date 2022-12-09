function timeNow() {
  let clock = new Date();
  let soat  = document.querySelector("#soat").textContent = clock.getHours();
  let minut = document.querySelector("#minut").textContent = clock.getMinutes();
  let secund =document.querySelector("#secund").textContent = clock.getSeconds();
  let hour = document.querySelector("#hr");
  let min = document.querySelector("#mn");
  let sec = document.querySelector("#sc");
  
  let hourDeg =  (soat*30+(minut*0.5))
  let minDeg =( minut * 6 )+ (secund * 0.1);
  let secDeg =  (secund*6);
 
  hour.style.transform = `rotate( ${hourDeg}deg)`
  min.style.transform = `rotate( ${minDeg}deg)`
  sec.style.transform = `rotate( ${secDeg}deg)`;}
timeNow();
setInterval(function () {
  timeNow();
}, 1000);
