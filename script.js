const randomColorGenerator = () => {
    let hex_code = "123456789ABCDEf";
    let randomColor = "#";

    for(let i=0; i<6; i++){
        randomIndex = Math.floor(Math.random() * 15);
        randomColor += hex_code[randomIndex];
    }
    return randomColor;
}

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const body = document.querySelector('body');

let intervalId;

const startChangingColor = function(){
    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor(){
        body.style.backgroundColor = randomColorGenerator();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
}

startBtn.addEventListener("click", startChangingColor);

stopBtn.addEventListener("click", stopChangingColor);