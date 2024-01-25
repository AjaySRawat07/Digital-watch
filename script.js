let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let format = document.querySelector("#format");
let ampm = document.querySelector("#ampm");
setInterval(()=>{
    let currentTime = new Date();
// console.log(currentTime);
if(format.value == 24){
    ampm.innerHTML= "";
}
else{
    ampm.innerText = hrs>12 ? "pm": "am"; 
}
hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);

